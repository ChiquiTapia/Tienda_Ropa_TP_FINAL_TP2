import Product from "../models/Product.js";

class ProductController {
  // Obtener todos los productos
  getAllProductController = async (req, res) => {
    try {
      const products = await Product.findAll();
      res.status(200).send({
        success: true,
        message: products,
      });
    } catch (error) {
      res.status(400).send({
        success: false,
        message: error.message,
      });
    }
  };

  // Obtener producto por ID
  getProductByIdController = async (req, res) => {
    try {
      const { id } = req.params;
      const product = await Product.findByPk(id);
      if (!product) {
        return res.status(404).send({
          success: false,
          message: "Producto no encontrado",
        });
      }
      res.status(200).send({
        success: true,
        message: product,
      });
    } catch (error) {
      res.status(400).send({
        success: false,
        message: error.message,
      });
    }
  };

  // Crear un nuevo producto
  createProductController = async (req, res) => {
    try {
      const { Titulo, descripcion, precio, image } = req.body;
      const newProduct = await Product.create({
        Titulo,
        descripcion,
        precio,
        image,
      });
      res.status(201).send({
        success: true,
        message: newProduct,
      });
    } catch (error) {
      res.status(400).send({
        success: false,
        message: error.message,
      });
    }
  };

  // Actualizar un producto
  updateProductController = async (req, res) => {
    try {
      const { id } = req.params;
      const product = await Product.findByPk(id);
      if (!product) {
        return res.status(404).send({
          success: false,
          message: "Producto no encontrado",
        });
      }

      await product.update(req.body);

      res.status(200).send({
        success: true,
        message: product,
      });
    } catch (error) {
      res.status(400).send({
        success: false,
        message: error.message,
      });
    }
  };

  // Eliminar un producto
  deleteProductController = async (req, res) => {
    try {
      const { id } = req.params;
      const product = await Product.findByPk(id);
      if (!product) {
        return res.status(404).send({
          success: false,
          message: "Producto no encontrado",
        });
      }

      await product.destroy();

      res.status(200).send({
        success: true,
        message: `Producto con ID ${id} eliminado`,
      });
    } catch (error) {
      res.status(400).send({
        success: false,
        message: error.message,
      });
    }
  };
}

export default ProductController;