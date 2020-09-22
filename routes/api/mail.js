const express = require('express')
const nodemailer  = require('nodemailer')
const router = express.Router()

router.post('/', (req, res) => {
    
    const { name, email, message } = req.body
   
    if(name === '' || email === '' || message === '') {
        return res.status(400).json({
            msg: "message fields cannot be empty"
        })
    }


const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    auth:{
        user: '',
        pass: ''
    }
})

const mailOptions = {
    from: `PortFolio site ${email}`,
    to: 'kolaniyi3@gmail.com',
    subject: 'Message From Portfolio',
    text: `${message} `,
    html: `<br><p style="text-align:center">${message} <br></br><br>from ${email}</br></p> </b>`
}

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        const msg = {
            error
        }
        return res.status(400).json(msg)
    }  

    res.send('message sent')
})

})

module.exports = router