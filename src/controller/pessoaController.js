const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

exports.getAllPessoa = async (req, res) => {
    try{
        const pessoa = await prisma.pessoa.findMany()
        
        res.json(pessoa)
    }catch (error) {
        res.status(500).json({error: error.message})
    }
}

exports.createPessoa = async (req, res)=> {
    try {
        const pessoa = await prisma.pessoa.create(
            {data: req.body}
        )
        res.status(201).json(pessoa)
    }catch (error) {
        res.status(400).json({ error: error.message })
    }
}

exports.updatePessoa = async (req, res) => {
    const { id } = req.params; // Obtém o ID da pessoa a ser atualizada
    const { nome, cpf } = req.body; // Obtém os novos dados do corpo da requisição

    try {
        const pessoa = await prisma.pessoa.update({
            where: { id: Number(id) }, // Especifica qual pessoa atualizar
            data: {
                nome,
                cpf,
            },
        });
        res.status(200).json(pessoa); // Retorna a pessoa atualizada
    } catch (error) {
        res.status(400).json({ error: error.message }); // Retorna erro se falhar
    }
};

exports.deletePessoa = async (req, res)=> {
    try{
        const {id} = req.params
        const pessoa = await prisma.pessoa.delete({
            where: {id: Number(id) }
        })
        res.status(200).json(pessoa)
    }catch (error) {
        res.status(400).json({error: error.message })
    }
}