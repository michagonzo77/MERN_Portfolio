const mongoose = require('mongoose');

const CardSchema = new mongoose.Schema(
    {
        song: {
            type: String,
            required: [true, '{PATH} is required.'],
            minlength: [3, '{PATH} must be at least {MINLENGTH} characters.']
        },
        name: {
            type: String,
            required: [true, '{PATH} is required.'],
            minlength: [3, '{PATH} must be at least {MINLENGTH} characters.']
        },
        image: {
            type: String,
            required: [true, '{PATH} is required.'],
            minlength: [3, '{PATH} must be at least {MINLENGTH} characters.']
        },
        audio: {
            type: String,
            required: [true, '{PATH} is required.'],
            minlength: [3, '{PATH} must be at least {MINLENGTH} characters.']
        },
        value: {
            type: Number,
            required: [true, '{PATH} is required.'],
            minlength: [1, '{PATH} must be at least {MINLENGTH} characters.']
        }
    },
    { timestamps: true }
);

//  Register schema with mongoose and provide a string to name the collection. This also returns a reference to our model that we can use for DB operations.

const Card = mongoose.model("Card", CardSchema);

module.exports = { Card: Card };