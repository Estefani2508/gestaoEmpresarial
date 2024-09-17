const connection = require("../config/db")
const {Sequelize} = require("@sequelize/core")

const Pessoa = connection.define("pessoa",{
    nome: {type: Sequelize.STRING,allowNull: false},
    cpf: {type: Sequelize.NUMBER,allowNull: false},
    telefone: {type: Sequelize.NUMBER,allowNull: false},
    email: {type: Sequelize.STRING,allowNull: false},
    endereco: {type: Sequelize.STRING,allowNull: false},
    tipo_pessoa: {type: Sequelize.STRING,allowNull: false}
})

module.exports= Pessoa