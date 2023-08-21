export let data = [
  {
    id: "1",
    title: "shirt",
    description: "white shirt",
    price: "50 $",
    category: "clothes",
    image: " https://shorturl.at/bcsQZ",
    quantity: 5,
    rating: {
      rate: 7.5,
      count: 3,
    },
  },
  {
    id: "2",
    title: "shirt",
    description: "gray shirt",
    price: "30 $",
    category: "clothes",
    image: " https://shorturl.at/oBRUZ",
    quantity: 5,
    rating: {
      rate: 6.3,
      count: 4,
    },
  },
];

let usersData = [
  {
    id: 1,
    email: "ori123@gmail.com",
    password: "ori123",
    isAdmin: true,
  },
];
import passwordValidator from "password-validator";
import jsonfile from "jsonfile";
const path = "./data.json";
const schema = new passwordValidator();
schema.is().min(8)                                    // Minimum length 8
.is().max(100)                                  // Maximum length 100
.has().uppercase()                              // Must have uppercase letters
.has().lowercase() 

export async function readFile() {
  return await jsonfile.readFile(path);
}

export async function writeFile() {
  return await jsonfile.writeFile(path, {products: data});
}

let tempId = "2";
export function getProducts() {
  return data;
}

export function getProductsById(id) {
  let temp = {};
  data.forEach((element) => {
    if (element.id === id) {
      temp = element;
    }
  });
  return temp;
}

export function addProduct(product) {
  tempId = +product.id;
  data.push(product);
  writeFile()
  return product;
}

export function updateProduct(id, product) {
  let upProd = getProductsById(id);
  upProd = product;
  writeFile()
  return upProd;
}

export function deletaProd(id) {
  let prodDel = getProductsById(id);
  console.log(prodDel);
  const index = data.indexOf(prodDel);
  data.splice(index, 1);
  writeFile()
  return prodDel, data;
}

export function updateProductQuan(id, upQuan) {
  let upProd = getProductsById(id);
  console.log(upProd);
  upProd.quantity = upQuan;
  writeFile()
  return upProd;
}

export function verifiUser(userEmail, userPassword) {
  let t = 0;
  usersData.forEach((element) => {
    if (element.password === userPassword && element.email === userEmail) {
      t = element;
    } else {
      t = false;
    }
  });
  return t;
}

export function addUser(user,password) {
  // validateUser(user)
  console.log(usersData);
  usersData.isAdmin = false;
  const validePassword = schema.validate(password);
  if (validePassword) {
  usersData.push(user);
  console.log('yay :)');
}
  else{
    console.log('booo!');
    throw "please provide a valide password"
  }
  return user;
}
