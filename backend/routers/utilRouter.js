const nodemailer = require("nodemailer")
const router = require("express").Router()

let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // upgrade later with STARTTLS
  auth: {
    user: "zoefama8@gmail.com",
    pass: "htgwngrkofxdxjif",
  },
})

// verify connection configuration
transporter.verify(function (error, success) {
  if (error) {
    console.log(error)
  } else {
    console.log("Server is ready to take our messages")
  }
})

router.post("/sendmail", (req, res) => {
    console.log(req.body);
  const { reciever, subject, html } = req.body

  transporter
    .sendMail({
      from: "zoefama8@gmail.com",
      to: reciever,
      subject: subject,
      html: html,
    })
    .then((result) => {
      console.log(result)
      res.json({ status: "success" })
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ status: "error" })
    })
})

// transporter.sendMail({
//     from: "digiproject121@gmail.com",
//     to: 'triplem656@gmail.com',
//     subject: 'hello there',
//     html: `<h1>There We Go</h1>`,
//   }).then(result => {
//     console.log(result);
//   }).catch(err => console.log(err))

module.exports = router
