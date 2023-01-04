const Product = require('../models/product')

const getAllProduct=async ()=>{
    try {
        const products= await Product.find();
        return products
    } catch (error) {
        console.log(`error ${error.message}`)
        res.status(500).json({message:'something went wrong in the server'})
    }
}

const createProduct=async(title,description)=>{
    try {
        const product= new Product({
            title,description
        })
        await product.save();
        return product
    } catch (error) {
        console.log(`error ${error.message}`)
        res.status(500).json({message:'something went wrong in the server'})
    }
}

const deleteProduct=async(id)=>{
    try {
        const product= await Product.findByIdAndDelete(id);
        return product
    } catch (error) {
        console.log(`error ${error.message}`)
        res.status(500).json({message:'something went wrong in the server'})
    }
}

const updateProduct=async(id,title,description)=>{
    try {
        const product= await Product
        .findById
        (id)
        .update
        ({title,description})
        return product
    } catch (error) {
        console.log(`error ${error.message}`)
        res.status(500).json({message:'something went wrong in the server'})
    }
}

module.exports={getAllProduct,createProduct,updateProduct,deleteProduct}