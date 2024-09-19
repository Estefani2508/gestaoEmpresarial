const express = require('express')
const router = express.Router()
const pessoaController = require('../controller/pessoaController')

router.get('/', pessoaController.getAllPessoa)
router.post('/', pessoaController.createPessoa)

module.exports = router