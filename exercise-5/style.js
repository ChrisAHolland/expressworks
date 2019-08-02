const express = require('express')
const app = express()
const port = process.argv[2]

app.use(require('stylus').middleware(__dirname))
app.use(express.static(__dirname))

app.listen(port)