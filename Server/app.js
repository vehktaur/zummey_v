const nodemailer = require('nodemailer');
const express = require("express");
const cors = require('cors');
const app = express();
const port = 3000



app.use(cors());
app.use(express.json({limit: "25mb"}));
app.use(express.urlencoded({limit: "25mb"}))
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', "*")
    
    next();
})

function sendEmail(email){
    return new Promise((resolve, reject) => {
        var transporter = nodemailer.createTransport({
            // host: "mail.privateemail.com",
            // port: 465,
            // secure: true,
            // auth: {
            //     user: "order@zummey.com",
            //     pass: "ZummeyOrder521",
            // },
            service: "gmail",
            auth: {
                user: "uwagboepromise5@gmail.com",
                pass: "cwwq seuu gskp qrwu",
            },  
        })

        const mail_configs = {
            from: "uwagboepromise5@gmail.com",
            to: "promuwagboe@gmail.com",
            subject: "Member in Waitlist",
            text: `
                Email Address: ${email}
            `
        }

        transporter.sendMail(mail_configs, function(error, info){
            if(error){
                console.log(error);
                return reject({message: `An error occured`})
            }
            return resolve({message: "Email sent sucessfully"})
        })
    })
}

app.post("/", (req, res) => {
    sendEmail(req.body.email)
        .then((response) => res.send(response.message))
        .catch((error) => res.status(500).send(error.message))
})



app.listen(port, () => {
    console.log(`nodemailer is listening at http://localhost:${port}`)
})