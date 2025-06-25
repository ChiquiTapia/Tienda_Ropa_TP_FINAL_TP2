import { Model, DataTypes } from "sequelize";
import connection from "../config/connection.js";

class Cart extends Model {}

Cart.init({}, {
  sequelize: connection,
  modelName: "Cart",
});

export default Cart;