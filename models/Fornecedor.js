const connection = require("../config/db")
const {Sequelize}= require("@sequelize/core")

const Fornecedor = connection.define("fornecedor",{
    nome: {type: Sequelize.STRING,allowNull: false},
    cnpj: {type: Sequelize.STRING,allowNull: false},
    telefone: {type: Sequelize.STRING,allowNull: false},
    email: {type: Sequelize.STRING,allowNull: false},
    endereco: {type: Sequelize.STRING,allowNull: false}

})

Fornecedor.sync({force: true})
    .then(() =>{
        console.log('Tabela product sincronizada com sucesso')
    }).catch((error) =>{
        console.log('Erro ao sincronizar tabela: ' + error)
    })

module.exports= Fornecedor