const express = require("express");
const nodemailer = require("nodemailer");
const helmet = require('helmet');
require('dotenv').config();

const app = express();
const router = express.Router();

const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: process.env.MAIL_PORT == 465, // true for 465, false for other ports
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD
    }
});

transporter.verify(error => error ? console.log(error) : console.log("Transported verified!"));

router.post("/", async (request, response) => {
    const name = request.query.name;
    const email = request.query.email;
    const text = request.query.text;
    if (text.length < 5) {
        response.status(400).end();
        return;
    }
    // Send the mail
    const result = await transporter.sendMail({
        from: process.env.MAIL_SENDER,
        to: process.env.MAIL_RECEIVER,
        subject: `New message ${name && "from " + name} ${email && "at " + email}`,
        text: text
    });
    result.error ? response.status(400) : response.status(200);
    response.end()
});

app.use(helmet());
app.use("/api", router);

app.listen(process.env.PORT, () => {
    console.log(`Personal backend running at http://${process.env.HOSTNAME}:${process.env.PORT}`)
});
