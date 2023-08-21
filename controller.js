import { log } from "console";
import * as BL from "./bl.js";
import { data } from "./dal.js";


export function getProducts(req, res) {
  res.send(BL.getProducts());
}

export function getProductsById(req, res) {
  const id = req.params.id;
  const prod = BL.getProductsById(id);
  res.send(prod);
}

export function addProduct(req, res) {
  let product = req.body;
  const prod = BL.addProduct(product);
  res.send(prod);
  return prod;
}

export function updateProduct(req, res) {
  let product = req.body;
  const id = req.params.id;
  let upProd = BL.updateProduct(id, product);
  res.send(upProd);
  return upProd;
}

export function deleteProd(req, res) {
  const id = req.params.id;
  let delProd = BL.deletaProd(id);
  console.log(data);
  console.log(delProd);
  res.send(data);
  return delProd, data;
}

export function updateProductQuan(req, res) {
  let upQuan = req.body.quantity;
  const id = req.params.id;
  let upProd = BL.updateProductQuan(id, upQuan);
  res.send(upProd);
  return upProd;
}
export function verifiUser(req, res) {
  let userEmail = req.body.email;
  let userPassword = req.body.password;
  let user = BL.verifiUser(userEmail, userPassword);
  console.log(user);
  if (user) {
    res.send("we found you", user);
    return;
  } else {
    res.send("email or password are incorect");
  }
}

export function addUser(req, res) {
  try {
    let user = req.body;
    const password = req.body.password;
    const newUser = BL.addUser(user,password);
    newUser.isAdmin = false
      res.send(newUser);
      return password
  } catch (error) {
    res.send(error)
  }
 
}
