const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

exports.getAllInventario = async (req, res) => {
    try{
        const inventario = await prisma.inventario.findMany()
        
        res.json(inventario)
    }catch (error) {
        res.status(500).json({error: error.message})
    }
}

exports.createInventario = async (req, res)=> {
    try {
        const inventario = await prisma.inventario.create(
            {data: req.body}
        )
        res.status(201).json(inventario)
    }catch (error) {
        res.status(400).json({ error: error.message })
    }
}

exports.updateInventario = async (req, res) => {
    const { id } = req.params;
    const { quantidade, data_atualizacao, produtos } = req.body;

    try{
        const inventario = await prisma.inventario.update({
            where: { id: Number(id) },
            data: {
                quantidade,
                data_atualizacao,
                produtos,
            },
        });
        res.status(200).json(inventario); // Retorna a pessoa atualizada
    } catch (error) {
        res.status(400).json({ error: error.message }); // Retorna erro se falhar
    }
};

exports.deleteInventario = async (req, res)=> {
    try{
        const {id} = req.params
        const inventario = await prisma.inventario.delete({
            where: {id: Number(id) }
        })
        res.status(200).json(inventario)
    }catch (error) {
        res.status(400).json({error: error.message })
    }
}
