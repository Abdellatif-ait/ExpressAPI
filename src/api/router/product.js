const router= require('express').Router();
const {getHanlder,postHandler,updateHandler ,deleteHandler}= require('../controllers/productController')
//get all products
router.get('/',getHanlder)
//add product
router.post('/',postHandler)
//update product by id
router.put('/:id', updateHandler)
//delete product by id
router.delete('/:id',deleteHandler)

module.exports= router