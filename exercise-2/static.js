const express = require('express')
const app = express()
const port = process.argv[2]
const file = 'index.html'

app.use(express.static(process.argv[3] || path.join(file, 'public')))

app.listen(port)