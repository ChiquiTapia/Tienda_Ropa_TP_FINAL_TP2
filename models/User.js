import { DataTypes, Model } from "sequelize";
import connection from "../config/connection.js";

class User extends Model {}

User.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: "El nombre no puede estar vacío" },
      },
    },
    mail: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: { msg: "El email no es válido" },
      },
    },
    pass: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [4, 100],
          msg: "La contraseña debe tener al menos 4 caracteres",
        },
      },
    },
    RoleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isIn: {
          args: [[1, 2]],
          msg: "RoleId debe ser 1 o 2",
        },
      },
    },
  },
  {
    sequelize: connection,
    modelName: "User",
  }
);

export default User;