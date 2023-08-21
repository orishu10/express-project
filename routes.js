import express from "express";
import * as CONTROLL from "./controller.js";
import * as app from "./app.js";
export const router = express.Router();

router.get("/users", CONTROLL.verifiUser);
router.post("/adduser",CONTROLL.addUser);
router.get("/", CONTROLL.getProducts);
router.get("/:id", CONTROLL.getProductsById);
// router.post("/add", CONTROLL.addProduct);
router.put("/update/:id", CONTROLL.updateProduct);
router.delete("/delete/:id", CONTROLL.deleteProd);
router.put("/upquan/:id", CONTROLL.updateProductQuan);
