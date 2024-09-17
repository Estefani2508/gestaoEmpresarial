const Fornecedor = require('./Fornecedor')
const Produto = require('./produto')

Fornecedor.hasMany(Produto,{
    foreignKey: 'fornecedorId'
})

Produto.belongsTo(Fornecedor,{
    foreignKey: 'fornecedorId'
})