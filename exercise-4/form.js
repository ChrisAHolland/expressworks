const express = require('express')
const bodyparser = require('body-parser')
const port = process.argv[2]
const app = express()

app.use(bodyparser.urlencoded( {extended: false} ))

app.post('/form', function(req, res) {
    const data = req.body.str.split('').reverse().join('')
    res.send(data)
})

app.listen(port)