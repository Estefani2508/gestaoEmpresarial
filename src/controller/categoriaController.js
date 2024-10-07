const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

exports.getAllCtegoria = async (req, res) => {
    try{
        const categoria = await prisma.categoria.findMany()
        
        res.json(categoria)
    }catch (error) {
        res.status(500).json({error: error.message})
    }
}

exports.createCategoria = async (req, res)=> {
    try {
        const categoria = await prisma.categoria.create(
            {data: req.body}
        )
        res.status(201).json(categoria)
    }catch (error) {
        res.status(400).json({ error: error.message })
    }
}

exports.updateCategoria = async (req, res) => {
    const { id } = req.params; 
    const { classificacao, nome, descricao } = req.body;

    try{
        const categoria = await prisma.categoria.update({
            where: { id: Number(id) },
            data: {
                nome,
                descricao,
                classificacao,
            },
        });
        res.status(200).json(categoria); // Retorna a pessoa atualizada
    } catch (error) {
        res.status(400).json({ error: error.message }); // Retorna erro se falhar
    }
};

exports.deleteCategoria = async (req, res)=> {
    try{
        const {id} = req.params
        const categoria = await prisma.categoria.delete({
            where: {id: Number(id) }
        })
        res.status(200).json(categoria)
    }catch (error) {
        res.status(400).json({error: error.message })
    }
}
        


    