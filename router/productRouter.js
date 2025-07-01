import { Router } from "express";
import ProductController from "../controllers/ProductController.js";

const router = Router();
const productController = new ProductController();

router.get("/", productController.getAllProductController);
router.get("/:id", productController.getProductByIdController);
router.post("/create", productController.createProductController);
router.put("/:id", productController.updateProductController);
router.delete("/:id", productController.deleteProductController);

export default router;