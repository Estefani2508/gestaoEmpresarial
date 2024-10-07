const express = require('express');
const router = express.Router();
const fornecedorController = require('../controller/fornecedorController');

/**
 * @swagger
 * tags:
 *   name: Fornecedores
 *   description: Gerenciamento de fornecedores
 */

/**
 * @swagger
 * /fornecedores:
 *   get:
 *     summary: Retorna todos os fornecedores
 *     tags: [Fornecedores]
 *     responses:
 *       200:
 *         description: Uma lista de fornecedores
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Fornecedor'
 */
router.get('/', fornecedorController.getAllFornecedor);

/**
 * @swagger
 * /fornecedores:
 *   post:
 *     summary: Cria um novo fornecedor
 *     tags: [Fornecedores]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Fornecedor'
 *     responses:
 *       201:
 *         description: Fornecedor criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: 'Fornecedor criado com sucesso'
 */
router.post('/', fornecedorController.createFornecedor);

/**
 * @swagger
 * /fornecedores/{id}:
 *   put:
 *     summary: Atualiza um fornecedor existente
 *     tags: [Fornecedores]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do fornecedor a ser atualizado
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Fornecedor'
 *     responses:
 *       200:
 *         description: Fornecedor atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: 'Fornecedor atualizado com sucesso'
 */
router.put('/:id', fornecedorController.updateFornecedor);

/**
 * @swagger
 * /fornecedores/{id}:
 *   delete:
 *     summary: Remove um fornecedor existente
 *     tags: [Fornecedores]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do fornecedor a ser removido
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Fornecedor removido com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: 'Fornecedor removido com sucesso'
 */
router.delete('/:id', fornecedorController.deleteFornecedor);

module.exports = router;
