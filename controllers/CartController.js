import { Cart, Product, CartProduct } from "../models/index.js";
import { validarDatosEntrada } from "../utils/validaciones.js";

class CartController {
 
  getCartByUserIdController = async (req, res) => {
    try {
      const { userId } = req.params;

      const cart = await Cart.findOne({
        where: { UserId: userId },
        include: {
          model: Product,
          through: {
            attributes: ["quantity"],
          },
        },
      });

      if (!cart) {
        return res.status(404).send({
          success: false,
          message: "Carrito no encontrado",
        });
      }

      res.status(200).send({
        success: true,
        message: cart.Products,
      });
    } catch (error) {
      res.status(400).send({
        success: false,
        message: error.message,
        error: error.errors?.map((e) => e.message),
      });
    }
  };

  
  addProductToCartController = async (req, res) => {
    try {
      const { userId, productId, quantity } = req.body;
      validarDatosEntrada({ userId, productId });

      const cart = await Cart.findOne({ where: { UserId: userId } });
      if (!cart) {
        return res.status(404).send({
          success: false,
          message: "Carrito no encontrado",
        });
      }

      const product = await Product.findByPk(productId);
      if (!product) {
        return res.status(404).send({
          success: false,
          message: "Producto no encontrado",
        });
      }

      const existing = await CartProduct.findOne({
        where: {
          CartId: cart.id,
          ProductId: product.id,
        },
      });

      if (existing) {
        existing.quantity += quantity;
        await existing.save();
      } else {
        await cart.addProduct(product, { through: { quantity } });
      }

      res.status(200).send({
        success: true,
        message: "Producto agregado al carrito",
      });
    } catch (error) {
      res.status(400).send({
        success: false,
        message: error.message,
        error: error.errors?.map((e) => e.message),
      });
    }
  };

  
  removeProductFromCartController = async (req, res) => {
    try {
      const { id: userId } = req.params;
      const { productId } = req.body;
      
      validarDatosEntrada({ userId, productId });
      
      const cart = await Cart.findOne({ where: { UserId: userId } });
      if (!cart) {
        return res.status(404).send({
          success: false,
          message: "Carrito no encontrado",
        });
      }

      await CartProduct.destroy({
        where: {
          CartId: cart.id,
          ProductId: productId,
        },
      });

      res.status(200).send({
        success: true,
        message: "Producto eliminado del carrito",
      });
    } catch (error) {
      res.status(400).send({
        success: false,
        mmessage: error.message,
        error: error.errors?.map((e) => e.message),
      });
    }
  };

 
  clearCartController = async (req, res) => {
    try {
      const { userId } = req.params;

      const cart = await Cart.findOne({ where: { UserId: userId } });
      if (!cart) {
        return res.status(404).send({
          success: false,
          message: "Carrito no encontrado",
        });
      }

      await CartProduct.destroy({ where: { CartId: cart.id } });

      res.status(200).send({
        success: true,
        message: "Carrito vaciado correctamente",
      });
    } catch (error) {
      res.status(400).send({
        success: false,
        message: error.message,
        error: error.errors?.map((e) => e.message),
      });
    }
  };
}

export default CartController;