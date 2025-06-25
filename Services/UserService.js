import { User, Role } from "../models/index.js";

class UserService {
  getAllUserService = async () => {
    const users = await User.findAll({
      attributes: ["id", "name", "mail", "RoleId"],
      include: {
        model: Role,
        attributes: ["roleName"],
      },
    });
    return users;
  };

  getlUserServiceById = () => {
    return "Get all users Services";
  };

  createUserService = async (data) => {
    const user = await User.create(data); // data incluye name, mail, pass (sin hash)
    return user.name;
  };

  login = async (data) => {
    const { mail, pass } = data;

    const user = await User.findOne({ where: { mail } });
    if (!user) throw new Error("Usuario no encontrado");

    if (user.pass !== pass) throw new Error("Contraseña incorrecta");

    return {
      id: user.id,
      name: user.name,
      mail: user.mail,
      role: user.RoleId,
    };
  };

  me = async (data) => {
    const { mail, pass } = data;

    const user = await User.findOne({ where: { mail } });
    if (!user || user.pass !== pass) {
      throw new Error("Credenciales inválidas");
    }

    return {
      id: user.id,
      name: user.name,
      mail: user.mail,
      role: user.RoleId,
    };
  };
}

export default UserService;
