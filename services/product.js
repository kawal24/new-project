// const productModel=require('./models/product');

const productService =async(product)=>{
    console.log('product', product)
    const newProduct=new productModel(product)
    return newProduct.save()
}

module.exports={productService}