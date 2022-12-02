const Product = require("./products.model")

const findById = async(id) => {
    return await Product.findById(id)
}

const find = async() => {
    return await Product.find()
}
const deleteById = async(id) => {
    return await Product.deleteById(id)
}
const save = async(productData) => {
const product = new Product(productData)
return await product.save()
}
module.exports = {findById,find,deleteById,save}