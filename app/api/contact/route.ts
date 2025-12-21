import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = process.env.RESEND_API_KEY 
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, service, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Check if Resend is configured
    if (!resend) {
      console.error('RESEND_API_KEY is not configured');
      return NextResponse.json(
        { error: 'Email service is not configured. Please contact support directly.' },
        { status: 500 }
      );
    }

    // Send email to info@viyainfo.com (will be forwarded by ImprovMX)
    const { data, error } = await resend.emails.send({
      from: 'ViyaInfo Contact Form <contact@viyainfo.com>', // Must be verified domain
      to: ['info@viyainfo.com'], // This will be forwarded by ImprovMX
      replyTo: `${name} <${email}>`, // Replies go directly to the user
      subject: `New Contact Form Submission from ${name}${service ? ` - ${service}` : ''}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #06b6d4; border-bottom: 2px solid #ec4899; padding-bottom: 10px; margin-bottom: 20px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin-top: 20px;">
            <p style="margin: 10px 0; font-size: 14px;">
              <strong style="color: #334155; display: inline-block; min-width: 120px;">Name:</strong> 
              <span style="color: #64748b;">${name}</span>
            </p>
            <p style="margin: 10px 0; font-size: 14px;">
              <strong style="color: #334155; display: inline-block; min-width: 120px;">Email:</strong> 
              <span style="color: #64748b;">${email}</span>
            </p>
            ${service ? `
            <p style="margin: 10px 0; font-size: 14px;">
              <strong style="color: #334155; display: inline-block; min-width: 120px;">Service:</strong> 
              <span style="color: #64748b;">${service}</span>
            </p>
            ` : ''}
            <div style="margin-top: 20px;">
              <strong style="color: #334155; display: block; margin-bottom: 10px;">Message:</strong>
              <div style="background-color: white; padding: 15px; border-radius: 4px; color: #475569; line-height: 1.6; white-space: pre-wrap;">
                ${message.replace(/\n/g, '\n')}
              </div>
            </div>
          </div>
          
          <p style="margin-top: 20px; color: #64748b; font-size: 12px; text-align: center;">
            This email was sent from the ViyaInfo contact form.<br>
            Reply to this email to respond directly to ${name} (${email}).
          </p>
        </div>
      `,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
${service ? `Service: ${service}` : ''}

Message:
${message}
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email. Please try again later.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Email sent successfully', data },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
