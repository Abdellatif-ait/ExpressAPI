const mongoose= require('mongoose');

const productSchema= mongoose.Schema({
    title: {
        type: String,
        require:true
    },
    description: {
        type: String,
        require:true
    },
})

module.exports= mongoose.model('Product',productSchema)