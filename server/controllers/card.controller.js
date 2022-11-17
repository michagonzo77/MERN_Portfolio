const { createCard,
    getAllCards,
    getCardById,
    deleteCardById,
    getCardByIdAndUpdate
} = require('../services/card.service');

const handleCreateCard = async (req, res) => {
    console.log('controller: handleCreateCard req.body: ', req.body);
    try {
        const card = await createCard(req.body);
        return res.json(card)
    } catch (error) {
        return res.status(400).json(error);
    }
}

const handleGetAllCards = async (req, res) => {
    console.log('controller: handleGetAllCards');
    try {
        const cards = await getAllCards();
        return res.json(cards)
    } catch (error) {
        return res.status(400).json(error);
    }
}

const handleGetCardById = async (req, res) => {
    console.log('controller: handleGetCardById req.params: ', req.params.id);
    try {
        const card = await getCardById(req.params.id);
        return res.json(card)
    } catch (error) {
        return res.status(400).json(error);
    }
}

const handleDeleteCardById = async (req, res) => {
    console.log('controller: handleDeleteCardById req.params: ', req.params.id);
    try {
        const card = await deleteCardById(req.params.id);
        return res.json(card)
    } catch (error) {
        return res.status(400).json(error);
    }
}

const handleUpdateCardById = async (req, res) => {
    console.log('controller: handleUpdateCardById req.params: ', req.params.id, "\n req.body: ", req.body);
    try {
        const card = await getCardByIdAndUpdate(req.params.id, req.body);
        return res.json(card)
    } catch (error) {
        return res.status(400).json(error);
    }
}

module.exports = {
    handleCreateCard: handleCreateCard,
    handleGetAllCards,
    handleGetCardById,
    handleDeleteCardById,
    handleUpdateCardById
};