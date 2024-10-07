const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

exports.getAllFornecedor = async (req, res) => {
    try{
        const fornecedor = await prisma.fornecedor.findMany()
        
        res.json(fornecedor)
    }catch (error) {
        res.status(500).json({error: error.message})
    }
}

exports.createFornecedor = async (req, res)=> {
    try {
        const fornecedor = await prisma.fornecedor.create(
            {data: req.body}
        )
        res.status(201).json(fornecedor)
    }catch (error) {
        res.status(400).json({ error: error.message })
    }
}

exports.updateFornecedor = async (req, res) => {
    const { id } = req.params;
    const { nome, telefone, email, endereco, produtos} = req.body;

    try{
        const fornecedor = await prisma.fornecedor.update({
            where: { id: Number(id) },
            data: {
                nome,
                telefone,
                email,
                endereco,
                produtos,

            },
        });
        res.status(200).json(fornecedor); // Retorna a pessoa atualizada
    } catch (error) {
        res.status(400).json({ error: error.message }); // Retorna erro se falhar
    }
};

exports.deleteFornecedor = async (req, res)=> {
    try{
        const {id} = req.params
        const fornecedor = await prisma.fornecedor.delete({
            where: {id: Number(id) }
        })
        res.status(200).json(fornecedor)
    }catch (error) {
        res.status(400).json({error: error.message })
    }
}