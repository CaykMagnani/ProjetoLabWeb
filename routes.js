const { getProducts, create } = require('./product-controller');
const joi = require('joi');

const routes = [
    {
        method: "GET",
        path: "/products",
        handler: getProducts
    },
    {
        method: "POST",
        path: "/createproducts",
        options: {
            handler: create,
            validate: {
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
        } 
    }
];

module.exports =  routes;