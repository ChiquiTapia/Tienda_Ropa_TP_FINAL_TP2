import { Model, DataTypes } from "sequelize";
import connection from "../config/connection.js";

class CartProduct extends Model {}

CartProduct.init({
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  sequelize: connection,
  modelName: "CartProduct",
});

export default CartProduct;