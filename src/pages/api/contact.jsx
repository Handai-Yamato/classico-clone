import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default function sendGmail(req, res) {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: process.env.GMAILUSER,
      pass: process.env.GMAILPASSWORD,
    },
  });

  // 管理人が受け取るメール
  const toHostMaiData = {
    from: req.body.email,
    to: "y.handai1272@gmail.com",
    subject: `[ホームページよりお問い合せがありました] ${req.body.name}様`,
    text: `${req.body.message} Send from ${req.body.email}`,
    html: `
        <p>【名前】</p>
        <p>${req.body.name}</p>
        <p>【お問い合せ内容】</p>
        <p>${req.body.message}</p>
        <p>【メールアドレス】</p>
        <p>${req.body.email}</p>
    `,
  };

  transporter.sendMail(toHostMaiData, function (err, info) {
    if (err) {
      console.log(err);
      return;
    }

    console.log("メールを送信しました");

    res.status(200).json({
      message: "メールを送信しました",
    });
  });
}
