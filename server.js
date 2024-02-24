require('dotenv').config()

const PORT = require('process.env.PORT')
const http = require('http')
const app = require('./app')

app.set('port', PORT)

const server = http.createServer((req, res) => {
    res.end('This is my server respose!')
})

server.listen(PORT, console.log(`Listening from port ${PORT}`)) 