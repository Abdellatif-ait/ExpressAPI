const {getAllProduct,createProduct, updateProduct,deleteProduct}= require('../services/productService')
const getHanlder=async (_req,res)=>{
    const products= await getAllProduct();
    res.status(200).json({message:"here's the products that we have",data:products})
}
const postHandler=async (req,res)=>{
    const {title,description}= req.body;
    if(!title||!description) return res.status(401).json({message:'you have to provide a title and description'})
    const product= await createProduct(title,description)
    res.status(201).json({message:"product created successfully ",data:product})
}
const deleteHandler=async (req,res)=>{
    const {id}= req.params;
    if(!id) return res.status(401).json({message:'you have to provide an id'})
    const product= await deleteProduct(id)
    res.status(201).json({message:"product deleted successfully ",data:product})
}
const updateHandler=async (req,res)=>{
    const {id}= req.params;
    const {title,description}= req.body;
    if(!id) return res.status(401).json({message:'you have to provide an id'})
    if(!title||!description) return res.status(401).json({message:'you have to provide a title and description'})
    const product= await updateProduct(id,title,description)
    res.status(201).json({message:"product updated successfully ",data:product})
}

module.exports={getHanlder,postHandler,deleteHandler,updateHandler}