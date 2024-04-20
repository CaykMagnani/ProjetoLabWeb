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
    return listproducts;
}

const create = (request, h) => {
    
    listproducts.push(request.payload);

    return listproducts
}

module.exports = {
    getProducts,
    create
};