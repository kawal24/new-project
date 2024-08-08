const createProductcontroller=async(req,res,next)=>{
    const requestbody=req.body;
    const newProduct= await createProduct(requestbody)
     res.send({message:"ok",newProduct})
 

}

module.exports={createProductcontroller}