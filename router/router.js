import { Router } from "express";
import userRouter from "./userRouter.js";
import rolesRouter from "./rolesRouter.js";

const router = Router();

router.use("/user",  userRouter);
router.use("/role", rolesRouter);
router.use("/product", productRouter);
router.use("/cart",cartRouter)

export default router;