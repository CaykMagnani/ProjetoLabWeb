const listproducts = [
    {
        id: 1,
        name: "TV",
        quantity: 1
    },
    {
        Id: 2,
        name: "Notevook",
        quantity: 33
    }
]

const getProducts = (request, h) => {
    const result = await business.list();
    return h.response(result).code(200)
}

const create = (request, h) => {
    
    const result = await business.create(request.payload);

    return h.response(result).code(201)
}

module.exports = {
    getProducts,
    create
};