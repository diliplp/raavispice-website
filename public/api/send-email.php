<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["status" => "error", "message" => "Method not allowed"]);
    exit;
}

// Get JSON input
$input = file_get_contents("php://input");
$data = json_decode($input, true);

if (!$data) {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "Invalid input"]);
    exit;
}

// Configuration
$toEmail = "hello@raavispice.com"; // Restaurant email
$fromEmail = "noreply@raavispice.com"; // Must be a domain email for deliverability
$siteName = "Raavi Spice";

$type = isset($data['date']) ? 'Reservation' : 'Contact';
$subject = $type === 'Reservation' 
    ? "New Reservation Request: " . $data['date'] . " at " . $data['time']
    : "New Contact Message: " . ($data['subject'] ?? 'General Inquiry');

$customerEmail = $data['email'] ?? '';
$customerName = $data['name'] ?? 'Customer';

// --- 1. Email to Restaurant ---
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= "From: $siteName <$fromEmail>\r\n";
$headers .= "Reply-To: $customerName <$customerEmail>\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

$logoUrl = "https://raavispice.com/images/logo.png";
$primaryColor = "#c5a059"; // Antique Gold
$secondaryColor = "#0a261e"; // Deep Green

// Table rows for dynamic data
$detailsRows = "";
foreach ($data as $key => $value) {
    if (strpos($key, '_') === 0 || empty($value)) continue;
    $label = ucfirst($key);
    $detailsRows .= "<tr>
        <td style='padding: 10px; border-bottom: 1px solid #eee; color: #666; font-weight: bold;'>$label</td>
        <td style='padding: 10px; border-bottom: 1px solid #eee; color: #333;'>$value</td>
    </tr>";
}

$restaurantHtml = "
<html>
<body style='font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0;'>
    <div style='max-width: 600px; margin: 20px auto; border: 1px solid #ddd;'>
        <div style='background: $secondaryColor; padding: 20px; text-align: center; border-bottom: 4px solid $primaryColor;'>
            <img src='$logoUrl' alt='$siteName' style='max-width: 150px;'>
        </div>
        <div style='padding: 30px;'>
            <h2 style='color: $secondaryColor; border-bottom: 2px solid $primaryColor; padding-bottom: 10px;'>New $type Request</h2>
            <p>You have received a new $type request from your website.</p>
            <table style='width: 100%; border-collapse: collapse; margin-top: 20px;'>
                $detailsRows
            </table>
            <div style='margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #999; text-align: center;'>
                Sent from the $siteName Website
            </div>
        </div>
    </div>
</body>
</html>";

$restaurantMailSent = mail($toEmail, $subject, $restaurantHtml, $headers);

// --- 2. Auto-Response to Customer ---
$autoResponseSent = false;
if (!empty($customerEmail)) {
    $autoSubject = "Thank you for your $type Request - $siteName";
    
    $greeting = "Dear $customerName,";
    $mainMessage = $type === 'Reservation' 
        ? "Thank you for choosing $siteName. we have received your reservation request and our team will contact you shortly to confirm your booking."
        : "Thank you for contacting $siteName. We have received your message and will get back to you as soon as possible.";

    $summarySection = "";
    if ($type === 'Reservation') {
        $summarySection = "
        <div style='background: #fdfaf3; padding: 20px; border-radius: 5px; margin: 20px 0;'>
            <h3 style='margin-top: 0; color: $secondaryColor;'>Request Summary:</h3>
            <p style='margin: 5px 0;'><strong>Date:</strong> " . $data['date'] . "</p>
            <p style='margin: 5px 0;'><strong>Time:</strong> " . $data['time'] . "</p>
            <p style='margin: 5px 0;'><strong>Guests:</strong> " . $data['guests'] . "</p>
        </div>";
    }

    $customerHtml = "
    <html>
    <body style='font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0;'>
        <div style='max-width: 600px; margin: 20px auto; border: 1px solid #ddd;'>
            <div style='background: $secondaryColor; padding: 30px; text-align: center; border-bottom: 4px solid $primaryColor;'>
                <img src='$logoUrl' alt='$siteName' style='max-width: 200px;'>
            </div>
            <div style='padding: 40px;'>
                <h1 style='color: $secondaryColor; font-size: 24px; margin-top: 0;'>$greeting</h1>
                <p style='font-size: 16px; color: #555;'>$mainMessage</p>
                
                $summarySection

                <p style='margin-top: 30px;'>We look forward to serving you soon!</p>
                
                <div style='margin-top: 40px; border-top: 1px solid #eee; padding-top: 20px;'>
                    <p style='font-weight: bold; margin-bottom: 5px;'>$siteName</p>
                    <p style='margin: 0; font-size: 14px; color: #777;'>39 Station Road, West Drayton, UB7 7LN</p>
                    <p style='margin: 0; font-size: 14px; color: #777;'>Phone: +44 1895 528170</p>
                    <p style='margin: 0; font-size: 14px; color: #777;'><a href='https://raavispice.com' style='color: $primaryColor; text-decoration: none;'>www.raavispice.com</a></p>
                </div>
            </div>
            <div style='background: #f9f9f9; padding: 15px; text-align: center; font-size: 12px; color: #aaa;'>
                &copy; " . date("Y") . " $siteName. All rights reserved.
            </div>
        </div>
    </body>
    </html>";

    $autoHeaders = "MIME-Version: 1.0" . "\r\n";
    $autoHeaders .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $autoHeaders .= "From: $siteName <$fromEmail>\r\n";
    $autoHeaders .= "X-Mailer: PHP/" . phpversion();
    
    $autoResponseSent = mail($customerEmail, $autoSubject, $customerHtml, $autoHeaders);
}

if ($restaurantMailSent) {
    echo json_encode(["status" => "success", "message" => "Email sent successfully", "autoresponse" => $autoResponseSent]);
} else {
    http_response_code(500);
    echo json_encode(["status" => "error", "message" => "Failed to send email to restaurant"]);
}
?>
