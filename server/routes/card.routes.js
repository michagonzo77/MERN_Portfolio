const express = require('express');

const {
    handleCreateCard,
    handleGetAllCards,
    handleGetCardById,
    handleDeleteCardById,
    handleUpdateCardById
} = require('../controllers/card.controller')

const router = express.Router();

router.post('/', handleCreateCard);
router.get('/', handleGetAllCards);
router.get('/:id', handleGetCardById);
router.delete('/:id', handleDeleteCardById);
router.put('/:id', handleUpdateCardById);

module.exports = {cardRouter:router};