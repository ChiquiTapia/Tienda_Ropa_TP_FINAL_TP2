class CartProduct extends Model {}
import { Model, DataTypes } from "sequelize";
import connection from "../config/connection.js";
CartProduct.init(
  {
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: { args: [1], msg: "La cantidad debe ser al menos 1" },
      },
    },
  },
  {
    sequelize: connection,
    modelName: "CartProduct",
  }
);

export default CartProduct;