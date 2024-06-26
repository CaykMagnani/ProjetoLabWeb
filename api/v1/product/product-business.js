const repository = require('./product-repository')

const create = async (product) => {

    return repository.save(product);
}

const list = async () => {
    return repository.findAll();
}

module.exports = {
    create,
    list
}