import { Request, Response } from 'express';
import nm from 'nodemailer';
import { GMAIL_PASSWORD, GMAIL_USER } from '../config';

export const sendEmail = async (req: Request, res: Response) => {
  const body = req.body;
  const transporter = await nm.createTransport({
    service: 'gmail',
    auth: {
      user: GMAIL_USER,
      pass: GMAIL_PASSWORD,
    },
  });

  console.log(body);

  const mailOptions = {
    to: GMAIL_USER,
  };

  try {
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
