import { Router } from "express";

const roleRouter = Router();

roleRouter.get("/", (req, res) => {
  res.status(200).send ("get all rolesRouter");
});

export default roleRouter;