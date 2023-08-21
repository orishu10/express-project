import * as DAL from "./dal.js"



 export function getProducts(){
    return DAL.getProducts();
  }

  export function getProductsById(id){
    return DAL.getProductsById(id)
  }
  export function addProduct(product){
    return DAL.addProduct(product)
  }
  export function updateProduct(id,product){
    return DAL.updateProduct(id ,product)
  }
  export function deletaProd(id){
    return DAL.deletaProd(id)
  }
  export function updateProductQuan(id,upQuan){
    return DAL.updateProductQuan(id,upQuan)
  }
  export function verifiUser(userEmail, userPassword){
   let use = DAL.verifiUser(userEmail, userPassword)
    return use;
  }

  export function addUser(user,password){
    return DAL.addUser(user,password)
  }