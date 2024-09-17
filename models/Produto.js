const connection = require("../config/db")
const {Sequelize}= require("@sequelize/core")

const Produto = connection.define("Produto",{
    quantidade: {type: Sequelize.NUMBER,allowNull: false},
    nome: {type: Sequelize.STRING,allowNull: false},
    codigo: {type: Sequelize.NUMBER,allowNull: false},
    descricao: {type: Sequelize.STRING,allowNull: false},
    preco: {type: Sequelize.NUMBER,allowNull: false},
    data_validade: {type:Sequelize.DATA,allowNull: false}
})

Produto.sync({force: true})
    .then(() =>{
        console.log('Tabela product sincronizada com sucesso')
    }).catch((error) =>{
        console.log('Erro ao sincronizar tabela: ' + error)
    })

module.exports= Produto