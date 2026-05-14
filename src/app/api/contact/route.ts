import nodemailer from 'nodemailer'

function getTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })
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

    await getTransporter().sendMail({
      from: `"Raavi Spice Website" <${process.env.SMTP_FROM}>`,
      to: process.env.SMTP_TO,
      replyTo: email,
      subject: `[Website] ${subject} from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    })

    return Response.json({ status: 'success' })
  } catch (error) {
    return Response.json(
      { status: 'error', message: 'Failed to send message' },
      { status: 500 }
    )
  }
}
