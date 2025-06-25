import Role from "./Role.js";
import User from "./User.js";
import Cart from "./Cart.js";
import Product from "./Product.js";
import CartProduct from "./CartProduct.js";


Role.hasMany(User);
User.belongsTo(Role);


User.hasOne(Cart);
Cart.belongsTo(User);


Cart.belongsToMany(Product, { through: CartProduct });
Product.belongsToMany(Cart, { through: CartProduct });

export {
  Role,
  User,
  Cart,
  Product,
  CartProduct
};