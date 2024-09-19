const express = require('express')
const pessoaRouter = require('./src/router/pessoaRouter')


const app = express()

app.use(express.json())

app.use('/pessoa', pessoaRouter)

module.exports = app