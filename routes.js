const { getProducts, create } = require('./api/v1/product/product-controller');
const schema = require('./api/v1/product/product-schema');

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
            validate: schema.getProductsSchema
        }
    }
];

module.exports = routes;