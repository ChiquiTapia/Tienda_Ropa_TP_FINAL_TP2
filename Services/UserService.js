import { User } from "../models/index.js";
import { Cart } from "../models/index.js";
class UserService {
  getAllUserService = async () => {
    const users = await User.findAll({
      attributes: ["id", "name", "mail", "RoleId"],
    });
    return users;
  };

  getUserServiceById = async (id) => {
    const user = await User.findByPk(id, {
      attributes: ["id", "name", "mail", "RoleId"],
    });
    if (!user) throw new Error("Usuario no encontrado");
    return user;
  };

 createUserService = async (data) => {
  if (!data.RoleId || ![1, 2].includes(data.RoleId)) {
    data.RoleId = 1;
  }

  const user = await User.create(data);

  
  await Cart.create({ UserId: user.id });

  return user;
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