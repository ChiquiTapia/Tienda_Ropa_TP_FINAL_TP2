import { Router } from "express";
import UserController from "../controllers/UserController.js";

const userController = new UserController();

const userRouter = Router();

userRouter.post("/login", userController.login);
userRouter.post("/register", userController.createUserController);
userRouter.get("/", userController.getAllUserController);
userRouter.get("/:id", userController.getUserByIdController);


export default userRouter;