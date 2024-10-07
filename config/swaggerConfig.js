// config/swaggerConfig.js
 
const swaggerJsdoc = require('swagger-jsdoc');
 
// Definindo as opções de configuração para o Swagger
const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Gestão Empresarial API',
            version: '1.0.0',
            description: 'Documentação da API do Gestão Empresarial',
        },
        servers: [
            {
                url: 'http://localhost:3000', // URL do servidor
            },
        ],
        components: {
            schemas: {
                Categoria: {
                    type: 'object',
                    properties: {
                        nome: {
                            type: 'string',
                            example: 'Nome da Categoria',
                        },
                        descricao: {
                            type: 'string',
                            example: 'Descrição da Categoria',
                        },
                        classificacao: {
                            type: 'string',
                            example: 'Classificação da Categoria',
                        },
                    },
                    required: ['nome', 'descricao', 'classificacao'], // Propriedades obrigatórias
                },
                Fornecedor: {
                    type: 'object',
                    properties: {
                        nome: {
                            type: 'string',
                            example: 'Nome do Fornecedor',
                        },
                        cnpj: {
                            type: 'string',
                            example: '12.345.678/0001-95',
                        },
                        telefone: {
                            type: 'string',
                            example: '(11) 91234-5678',
                        },
                        email: {
                            type: 'string',
                            example: 'fornecedor@example.com',
                        },
                        endereco: {
                            type: 'string',
                            example: 'Rua Exemplo, 123, Bairro, Cidade, Estado',
                        },
                    },
                    required: ['nome', 'cnpj', 'telefone', 'email', 'endereco'], // Propriedades obrigatórias
                },
                Inventario: {
                    type: 'object',
                    properties: {
                        quantidade: {
                            type: 'integer',
                            example: 100,
                        },
                        data_atualizacao: {
                            type: 'string',
                            format: 'date-time',
                            example: '2023-10-02T10:00:00Z',
                        },
                    },
                    required: ['quantidade', 'data_atualizacao'], // Propriedades obrigatórias
                },
                Pessoa: {
                    type: 'object',
                    properties: {
                        nome: {
                            type: 'string',
                            example: 'Nome da Pessoa',
                        },
                        cpf: {
                            type: 'string',
                            example: '123.456.789-00',
                        },
                        telefone: {
                            type: 'string',
                            example: '(11) 91234-5678',
                        },
                        email: {
                            type: 'string',
                            example: 'pessoa@example.com',
                        },
                        endereco: {
                            type: 'string',
                            example: 'Rua Exemplo, 123, Bairro, Cidade, Estado',
                        },
                        tipo_pessoa: {
                            type: 'string',
                            example: 'fisica'
                        }
                    },
                    required: ['nome', 'cpf', 'telefone', 'email', 'endereco'], // Propriedades obrigatórias
                },
                Produto: {
                    type: 'object',
                    properties: {
                        quantidade: {
                            type: 'integer',
                            example: 100,
                        },
                        nome: {
                            type: 'string',
                            example: 'Produto Exemplo',
                        },
                        codigo: {
                            type: 'integer',
                            example: 12345,
                        },
                        descricao: {
                            type: 'string',
                            example: 'Descrição do produto exemplo.',
                        },
                        preco: {
                            type: 'integer',
                            example: 1999, // Representando o preço em centavos, por exemplo
                        },
                        data_validade: {
                            type: 'string',
                            format: 'date-time',
                            example: '2023-12-31T23:59:59Z',
                        },
                        fornecedorId: {
                            type: 'integer',
                            example: 1,
                        },
                        categoriaId: {
                            type: 'integer',
                            example: 1,
                        },
                        inventarioId: {
                            type: 'integer',
                            example: 1,
                        },
                    },
                    required: [
                        'quantidade',
                        'nome',
                        'codigo',
                        'descricao',
                        'preco',
                        'data_validade',
                        'fornecedorId',
                        'categoriaId',
                        'inventarioId'
                    ], // Propriedades obrigatórias
                },

            },  
        }
 
    },
    apis: ['./src/router/*.js'], // Caminho para os arquivos de rotas
};
 
// Exporta a configuração gerada pelo swagger-jsdoc
const swaggerDocs = swaggerJsdoc(swaggerOptions);
 
module.exports = swaggerDocs;