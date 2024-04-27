const joi = require('joi');

const getProductsSchema = {
    payload: joi.object({
        name: joi.string()
            .required()
            .min(3)
            .max(60),
        quantity: joi
            .number()
            .integer()
            .required()
    })
}


module.exports = {
    getProductsSchema
};