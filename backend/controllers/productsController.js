const product = require('../models/product');

class ProductController {
  static async postProduct(req, res) {
    const reqProduct = req.body;
    const newProduct = new product(
                                    reqProduct.productName,
                                    reqProduct.description,
                                    reqProduct.basePricing,
                                    reqProduct.dscType,
                                    reqProduct.dscPercent,
                                    reqProduct.taxClass,
                                    reqProduct.VATAmount,
                                    reqProduct.category,
                                    reqProduct.tag,
                                    reqProduct.status);
        console.log("NEW PRODUCT", newProduct)

    try {
      const savedProduct = await newProduct.addNewProduct();
      res.send(newProduct)
    } catch (error) {
      console.log("my error = ",error);
      res.status(500).send('Error saving the product');
    }
  }
}

module.exports = ProductController