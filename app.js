const express = require('express')

const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('./config/swaggerConfig');

const pessoaRouter = require('./src/router/pessoaRouter')
const categoriaRouter = require('./src/router/categoriaRouter')
const inventarioRouter = require('./src/router/inventarioRouter')
const produtoRouter = require('./src/router/produtoRouter')
const fornecedorRouter = require('./src/router/fornecedorRouter')




const app = express()

app.use(express.json())

// Configurar o Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use('/pessoas', pessoaRouter)
app.use('/categorias', categoriaRouter)
app.use('/inventario', inventarioRouter)
app.use('/produtos', produtoRouter)
app.use('/fornecedores',fornecedorRouter)




module.exports = app