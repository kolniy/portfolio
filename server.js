const express = require('express')
const path = require('path')

const publicPath = path.resolve(__dirname, 'client', 'build')

const app = express()

const PORT = process.env.PORT || 4000

app.use(express.json({ extended: false }))

// routes handler for send mail
app.use("/api/mail", require('./routes/api/mail'))

if(process.env.NODE_ENV === 'production'){
    //  setup for using static files
    app.use(express.static(publicPath))

    // setup for single page applications
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
} 


app.listen(PORT, () => {
    console.log(`app is running on port ${PORT}`)
})