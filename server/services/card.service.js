const {Card} = require("../models/card.model");

const createCard = async (data) => {
    console.log("service: createCard");
    const card = await Card.create(data);
    return card;
}

const getAllCards = async () => {
    console.log("service: getAllCards");
    const cards = await Card.find();
    return cards;
}

const getCardById = async (id) => {
    console.log("service: getCardById");
    const card = await Card.findById(id);
    return card;
}

const deleteCardById = async (id) => {
    console.log("service: deleteCardById");
    const card = await Card.findByIdAndDelete(id);
    return card;
}

const getCardByIdAndUpdate = async (id, data) => {
    console.log("service: getCardByIdAndUpdate");
    const card = await Card.findByIdAndUpdate(id,data, {
        //  Re-run validators upon update.
        runValidators: true,
        // Return the updated card.
        new: true
    });
    return card;
}


module.exports = {
    createCard: createCard,
    getAllCards,
    getCardById,
    deleteCardById,
    getCardByIdAndUpdate
};