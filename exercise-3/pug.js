const express = require('express')
const app = express()
const port = process.argv[2]

app.set('view engine', 'pug')
app.set('views', __dirname)
app.get('/home', function(req, res) {
    res.render(__dirname, { date: new Date().toDateString() })
})

app.listen(port)