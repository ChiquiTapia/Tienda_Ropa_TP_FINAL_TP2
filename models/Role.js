import { DataTypes, Model } from "sequelize";
import connection from "../config/connection.js";

class Role extends Model {}

Role.init(
  {
    rolName: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize: connection,
    modelName: "Role",
  }
);

export default Role;
