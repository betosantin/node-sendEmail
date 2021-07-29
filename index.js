const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    port: 587,
    secure: false,
    auth: {
        user: "betosantin@hotmail.com",
        pass: ""
    }
});

transporter.sendMail({
    from: "Roberto Santin <betosantin@hotmail.com>",
    to: "betosantin@gmail.com",
    subject: "Test send e-mail",
    text: "Hello World",
    html: "<a href='www.google.com'>Site</a>"
}).then(msg =>{
    console.log(msg);
}).catch(err =>{
    console.log(err);
});