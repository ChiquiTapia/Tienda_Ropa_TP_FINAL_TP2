import UserService from "../services/UserService.js";
import { validarDatosEntrada } from "../utils/validaciones.js";
class UserController {
  userService = new UserService();

  getAllUserController = async (req, res) => {
    try {
      const users = await this.userService.getAllUserService();
      res.status(200).send({
        success: true,
        message: users,
      });
    } catch (error) {
      res.status(400).send({
      success: false,
      message: error.message,
      error: error.errors?.map((e) => e.message),
      });
    }
  };

  getUserByIdController = async (req, res) => {
    try {
      const { id } = req.params;
      const user = await this.userService.getUserServiceById(id);
      res.status(200).send({
        success: true,
        message: user,
      });
    } catch (error) {
      res.status(404).send({
      success: false,
      message: error.message,
      error: error.errors?.map((e) => e.message),
      });
    }
  };

  createUserController = async (req, res) => {
    try {
      const { name, mail, pass, RoleId } = req.body;
      validarDatosEntrada({ name, mail, pass });
      const user = await this.userService.createUserService({
        name,
        mail,
        pass,
        RoleId,
      });
      res.status(201).send({
        success: true,
        message: user,
      });
    } catch (error) {
      res.status(400).send({
        success: false,
        message: error.message,
        error: error.errors?.map((e) => e.message),
      });
    }
  };

  login = async (req, res) => {
    try {
      const { mail, pass } = req.body;
      validarDatosEntrada({ mail, pass });
      const user = await this.userService.login({ mail, pass });
      res.status(200).send({
        success: true,
        message: "Usuario logueado",
        user,
      });
    } catch (error) {
      res.status(400).send({
      success: false,
      message: error.message,
      error: error.errors?.map((e) => e.message),
      });
    }
  };


}

export default UserController;