import { DataTypes, Model } from "sequelize";
import connection from "../connection/connection.js";


class User extends Model {
 
}

User.init(
  {
    name: DataTypes.STRING,
    mail: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      mail: true,
    },
    pass: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    RoleId: {
      type: DataTypes.INTEGER,
      
    },
  },
  {
    sequelize: connection,
    modelName: "User",
  }
);



export default User;