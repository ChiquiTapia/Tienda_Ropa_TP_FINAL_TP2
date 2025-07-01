import { DataTypes, Model } from "sequelize";
import connection from "../config/connection.js";

class Cart extends Model {}

Cart.init(
  {
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize: connection,
    modelName: "Cart",
  }
);

export default Cart;