import { Router } from "express";
import ProductController from "../controllers/ProductController.js";

const router = Router();
const productController = new ProductController();

router.get("/products", productController.getAllProductController);
router.get("/products/:id", productController.getProductByIdController);
router.post("/products/create", productController.createProductController);
router.put("/products/:update", productController.updateProductController);
router.delete("/products/:delete", productController.deleteProductController);

export default router;