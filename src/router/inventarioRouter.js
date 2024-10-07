const express = require('express');
const router = express.Router();
const inventarioController = require('../controller/inventarioController');

/**
 * @swagger
 * tags:
 *   name: Inventário
 *   description: Gerenciamento do inventário
 */

/**
 * @swagger
 * /inventario:
 *   get:
 *     summary: Retorna todos os itens do inventário
 *     tags: [Inventário]
 *     responses:
 *       200:
 *         description: Uma lista de itens do inventário
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Inventario'
 */
router.get('/', inventarioController.getAllInventario);

/**
 * @swagger
 * /inventario:
 *   post:
 *     summary: Adiciona um novo item ao inventário
 *     tags: [Inventário]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Inventario'
 *     responses:
 *       201:
 *         description: Item adicionado ao inventário com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: 'Item adicionado com sucesso'
 */
router.post('/', inventarioController.createInventario);

/**
 * @swagger
 * /inventario/{id}:
 *   put:
 *     summary: Atualiza um item existente no inventário
 *     tags: [Inventário]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do item a ser atualizado
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Inventario'
 *     responses:
 *       200:
 *         description: Item atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: 'Item atualizado com sucesso'
 */
router.put('/:id', inventarioController.updateInventario);

/**
 * @swagger
 * /inventario/{id}:
 *   delete:
 *     summary: Remove um item do inventário
 *     tags: [Inventário]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do item a ser removido
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Item removido com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: 'Item removido com sucesso'
 */
router.delete('/:id', inventarioController.deleteInventario);

module.exports = router;
