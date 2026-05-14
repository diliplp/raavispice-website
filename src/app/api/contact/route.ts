import { Resend } from 'resend'

function getResend() {
  return new Resend(process.env.RESEND_API_KEY!)
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

    const { data, error } = await getResend().emails.send({
      from: 'Raavi Spice <onboarding@resend.dev>',
      to: ['dilipparmar@gmail.com'],
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

    if (error) {
      return Response.json(
        { status: 'error', message: error.message },
        { status: 500 }
      )
    }

    return Response.json({ status: 'success', data })
  } catch (error: any) {
    return Response.json(
      { status: 'error', message: error.message || 'Internal server error' },
      { status: 500 }
    )
  }
}
