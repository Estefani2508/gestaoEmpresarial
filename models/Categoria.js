const connection = require("../config/db")
const {Sequelize} = require("@sequize/core")

const Categoria = connection.define("categoria",{
    nome: {type: Sequelize.STRING,allowNull: false},
    descricao: {type: Sequelize.STRING,allowNull: false},
    classificacao: {type: Sequelize.STRING,allowNull: false}
})

module.exports=  Categoria