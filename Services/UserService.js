import { User, Role } from "../models/index.js";
import { gentoken } from "../utils/token.js";

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
    const user = await User.create(data);
    return user.name;
  };

  login = async (data) => {
    const { mail, pass } = data;
    const user = await User.findOne({
      where: {
        mail,
      },
    });
    if (!user) throw new Error("User not found");
    const comparePass = await User.compare(pass, user.pass);
    if (!comparePass) throw new Error("User not found");

    const payload = {
      id: user.id,
      mail: user.mail,
      role: user.RoleId,
    };

    const token = gentoken(payload);

    return {
      token
    };
  };

  me=async (token) => {
    
    
  }
}

export default UserService;
