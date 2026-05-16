import { Resend } from 'resend'

function getResend() {
  return new Resend(process.env.RESEND_API_KEY!)
}

const logoUrl = 'https://raavispice.com/images/logo.png'
const primaryColor = '#c5a059'
const secondaryColor = '#0a261e'

function restaurantEmailHtml(data: any) {
  const { name, email, phone, subject, message } = data
  return `
<!html>
<html>
<head><meta charset="utf-8"></head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0;">
  <div style="max-width: 600px; margin: 20px auto; border: 1px solid #ddd;">
    <div style="background: ${secondaryColor}; padding: 20px; text-align: center; border-bottom: 4px solid ${primaryColor};">
      <img src="${logoUrl}" alt="Raavi Spice" style="max-width: 150px;">
    </div>
    <div style="padding: 30px;">
      <h2 style="color: ${secondaryColor}; border-bottom: 2px solid ${primaryColor}; padding-bottom: 10px;">New Contact Message</h2>
      <p>You have received a new message from the website contact form.</p>
      <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
        <tr><td style="padding: 10px; border-bottom: 1px solid #eee; color: #666; font-weight: bold;">Name</td><td style="padding: 10px; border-bottom: 1px solid #eee; color: #333;">${name}</td></tr>
        <tr><td style="padding: 10px; border-bottom: 1px solid #eee; color: #666; font-weight: bold;">Email</td><td style="padding: 10px; border-bottom: 1px solid #eee; color: #333;">${email}</td></tr>
        <tr><td style="padding: 10px; border-bottom: 1px solid #eee; color: #666; font-weight: bold;">Phone</td><td style="padding: 10px; border-bottom: 1px solid #eee; color: #333;">${phone || 'Not provided'}</td></tr>
        <tr><td style="padding: 10px; border-bottom: 1px solid #eee; color: #666; font-weight: bold;">Subject</td><td style="padding: 10px; border-bottom: 1px solid #eee; color: #333;">${subject}</td></tr>
        <tr><td style="padding: 10px; border-bottom: 1px solid #eee; color: #666; font-weight: bold;">Message</td><td style="padding: 10px; border-bottom: 1px solid #eee; color: #333;">${message}</td></tr>
      </table>
      <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #999; text-align: center;">
        Sent from the Raavi Spice Website
      </div>
    </div>
  </div>
</body>
</html>`
}

function autoResponseHtml(name: string) {
  return `
<!html>
<html>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0;">
  <div style="max-width: 600px; margin: 20px auto; border: 1px solid #ddd;">
    <div style="background: ${secondaryColor}; padding: 30px; text-align: center; border-bottom: 4px solid ${primaryColor};">
      <img src="${logoUrl}" alt="Raavi Spice" style="max-width: 200px;">
    </div>
    <div style="padding: 40px;">
      <h1 style="color: ${secondaryColor}; font-size: 24px; margin-top: 0;">Dear ${name},</h1>
      <p style="font-size: 16px; color: #555;">Thank you for contacting Raavi Spice. We have received your message and will get back to you as soon as possible.</p>
      <p style="margin-top: 30px;">We look forward to serving you soon!</p>
      <div style="margin-top: 40px; border-top: 1px solid #eee; padding-top: 20px;">
        <p style="font-weight: bold; margin-bottom: 5px;">Raavi Spice</p>
        <p style="margin: 0; font-size: 14px; color: #777;">39 Station Road, West Drayton, UB7 7LN</p>
        <p style="margin: 0; font-size: 14px; color: #777;">Phone: +44 1895 528170</p>
        <p style="margin: 0; font-size: 14px; color: #777;"><a href="https://raavispice.com" style="color: ${primaryColor}; text-decoration: none;">www.raavispice.com</a></p>
      </div>
    </div>
    <div style="background: #f9f9f9; padding: 15px; text-align: center; font-size: 12px; color: #aaa;">
      &copy; ${new Date().getFullYear()} Raavi Spice. All rights reserved.
    </div>
  </div>
</body>
</html>`
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, subject, message } = body

    if (!name || !email || !subject || !message) {
      return Response.json(
        { status: 'error', message: 'Missing required fields' },
        { status: 400 }
      )
    }

    const resend = getResend()

    console.log('Attempting to send email to restaurant...')
    const { data: restaurantData, error: restaurantErr } = await resend.emails.send({
      from: 'Raavi Spice <hello@raavispice.com>',
      to: ['hello@raavispice.com'],
      bcc: ['dilipparmar@gmail.com'],
      replyTo: email,
      subject: `[Website] ${subject} from ${name}`,
      html: restaurantEmailHtml(body),
    })

    if (restaurantErr) {
      console.error('Restaurant email error:', restaurantErr)
      return Response.json(
        { status: 'error', message: restaurantErr.message },
        { status: 500 }
      )
    }
    console.log('Restaurant email sent successfully:', restaurantData)

    console.log('Attempting to send auto-response to user...')
    const { data: userData, error: userErr } = await resend.emails.send({
      from: 'Raavi Spice <hello@raavispice.com>',
      to: [email],
      subject: 'Thank you for contacting Raavi Spice',
      html: autoResponseHtml(name),
    })
    
    if (userErr) {
      console.error('User auto-response error:', userErr)
      // We don't return 500 here because the restaurant already got the notification
    } else {
      console.log('User auto-response sent successfully:', userData)
    }

    return Response.json({ status: 'success' })
  } catch (error: any) {
    return Response.json(
      { status: 'error', message: error.message || 'Internal server error' },
      { status: 500 }
    )
  }
}
