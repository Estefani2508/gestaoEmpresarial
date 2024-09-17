const connection = require("../config/db")
const {Sequelize} = require("@sequelize/core")

const Inventario = connection.define("Inventario",{
    quantidade: {type: Sequelize.NUMBER,allowNull: false},
    data_atualizacao: {type: Sequelize.DATE,allowNull: false}
    
})


module.exports= Inventario