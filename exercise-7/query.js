const express = require('express')
const port = process.argv[2]
const app = express()

app.get('/search', function(req, res) {
    const data = req.query
    res.send(data)
})

app.listen(port)