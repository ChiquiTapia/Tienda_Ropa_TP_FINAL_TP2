import { DataTypes, Model } from "sequelize";
import connection from "../connection/connection.js";

class Product extends Model {
 
}


Product.init(
  {
    Name: DataTypes.STRING,
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      mail: true,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    image: DataTypes.STRING,
  },
  {
    sequelize: connection,
    modelName: "Product",
  }
);
export default Product;