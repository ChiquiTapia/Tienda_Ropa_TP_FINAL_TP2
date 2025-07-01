import { DataTypes, Model } from "sequelize";
import connection from "../config/connection.js";

class Product extends Model {}

Product.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: "El nombre no puede estar vacío" },
      },
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: "La descripción es obligatoria" },
      },
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        isFloat: { msg: "El precio debe ser un número" },
        min: { args: [1000], msg: "El precio debe ser mayor a mil" },
      },
    },
    image: {
      type: DataTypes.STRING,
      validate: {
        isUrl: { msg: "La URL de la imagen no es válida" },
      },
    },
  },
  {
    sequelize: connection,
    modelName: "Product",
  }
);

export default Product;