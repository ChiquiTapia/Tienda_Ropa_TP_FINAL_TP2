import { DataTypes, Model } from "sequelize";
import connection from "../connection/connection.js";

class Product extends Model {
 
}


Product.init(
  {
    Titulo: DataTypes.STRING,
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      mail: true,
    },
    precio: {
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