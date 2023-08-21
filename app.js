import express from "express";
import { router } from "./routes.js";
import morgan from "morgan";
import axios from "axios";
import * as DAL from "./dal.js";
import * as CONTROLL from "./controller.js";
import jsonfile from "jsonfile";
const app = express();
const port = 3000; 
DAL.readFile()
app.use(express.json());
app.use(morgan("tiny"));
app.use("/project", router);

app.listen(port, () => {
  console.log("user is running");
//   axios
//     .get("https://fakestoreapi.com/products")
//     .then((response) => {
//       response.data.forEach((element) => {
//         element.quantity = Math.random() * 30 + 2;
//         data.push(element);
//  });
//     })
//     .catch((error) => {
//       console.error(error);
//     });
 });
function midllewear(req, res, next) {
  console.log(req.body);
  console.log("amit ha gevar");
  next();
}
