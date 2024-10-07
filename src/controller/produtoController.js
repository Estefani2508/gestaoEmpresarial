const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

exports.getAllProduto = async (req, res) => {
    try{
        const produto = await prisma.produto.findMany()

        res.json(produto)
    }catch (error) {
        res.status(500).json({error: error.message})
    }
}

exports.createProduto = async (req, res) => {
    try{
        const produto = await prisma.produto.create(
            {data: req.body}
        )
        res.status(201).json(produto)
    }catch (error) {
        res.status(400).json({ error: error.message})
    }
}

exports.updateProduto = async (req, res) => {
    const { id } = req.params; // Obtém o ID da pessoa a ser atualizada
    const { quantidade, codigo, preco, data_validade} = req.body; // Obtém os novos dados do corpo da requisição

    try {
        const produto = await prisma.produto.update({
            where: { id: Number(id) }, //Especifica qual o produto atualizado
            data: {
                quantidade,
                codigo,
                preco,
                data_validade,
            },
        });
        res.status(200).json(produto); // Retorna o produto atualizado
    } catch (error) {
        res.status(200).json({ error: error.message}); // Retorna o produto se falhar
    }
};

exports.deleteProduto = async (req, res)=> {
    try{
        const {id} = req.params
        const produto = await prisma.produto.delete({
            where: {id: Number(id) }
        })
        res.status(200).json(produto)
    }catch (error) {
        res.status(400).json({error: error.message })
    }
}
    