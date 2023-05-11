import { Request, Response } from 'express';
import { GMAIL_PASSWORD, GMAIL_USER } from '../config';
import nodemailer from 'nodemailer';
import { emailContent } from '../services';

export const sendEmail = async (req: Request, res: Response) => {
  const { name, email, businessType, comment } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: GMAIL_USER,
      pass: GMAIL_PASSWORD,
    },
  });

  try {
    const { name, email, businessType, comment } = req.body;

    const mailOptions = {
      from: email,
      to: GMAIL_USER,
      subject: `New message from ${email}`,
      html: emailContent(name, email, businessType, comment),
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({
      message: 'Email sent successfully',
    });
  } catch (err) {
    console.error(`Error while sending email ${err}`);
    return res.status(500).json({
      message: `Error while sending email. Server error: ${err}`,
    });
  }
};
