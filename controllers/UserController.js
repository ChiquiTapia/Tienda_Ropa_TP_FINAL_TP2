import UserService from "../services/UserService.js";

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
      });
    }
  };

  getUserByIdController = (req, res) => {
    const user = this.userService.getlUserServiceById();
    res.status(200).send({
      success: true,
      message: user,
    });
  };

  createUserController = async (req, res) => {
    try {
      const { name, mail, pass } = req.body;
      const user = await this.userService.createUserService({
        name,
        mail,
        pass,
      });

      res.status(201).send({
        success: true,
        message: user,
      });
    } catch (error) {
      res.status(400).send({
        success: false,
        message: error.message,
      });
    }
  };

  login = async (req, res) => {
    try {
      const { mail, pass } = req.body;
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
      });
    }
  };

  me = async (req, res) => {
    try {
      const { mail, pass } = req.body;
      const user = await this.userService.me({ mail, pass });

      res.status(200).send({
        success: true,
        message: "Usuario autenticado",
        user,
      });
    } catch (error) {
      res.status(401).send({
        success: false,
        message: error.message,
      });
    }
  };
}

export default UserController;