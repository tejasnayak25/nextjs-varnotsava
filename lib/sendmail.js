import * as nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export const send = async function send(to, emailHtml) {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        host: 'smtp.gmail.com',
        // port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: process.env.MAIL_USER,
          pass: process.env.MAIL_PASS
        }
      })
      try {
        await transporter.sendMail({
          from: `"Message bot" - ${process.env.MAIL_USER}`, // sender address
          to: to, // list of receivers
          subject: `Confirmation regarding the registration for Varnotsava 2K23`, // Subject line
        //   text: JSON.stringify(message), // plain text body
          html: emailHtml // html body
        })
        return NextResponse.json({ status: 200 })
      } catch (err) {
        console.log(err)
        return NextResponse.json({ status: 500 })
      }
}