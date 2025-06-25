


import { Router } from "express";
import CartController from "../controllers/CartController.js";

const router = Router();
const cartController = new CartController();

router.get("/cart/:id", cartController.getCartByUserIdController);
router.post("/cart/add", cartController.addProductToCartController);
router.delete("/cart/remove", cartController.removeProductFromCartController);
router.delete("/cart/clear", cartController.clearCartController);

export default router;