


import { Router } from "express";
import CartController from "../controllers/CartController.js";

const router = Router();
const cartController = new CartController();

router.get("/:userId", cartController.getCartByUserIdController);
router.post("/add", cartController.addProductToCartController);
router.delete("/:id/delete", cartController.removeProductFromCartController);
router.delete("/:userId/clear", cartController.clearCartController);

export default router;