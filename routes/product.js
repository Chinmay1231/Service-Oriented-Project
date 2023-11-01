var productController = require("../controllers/product")

var express = require("express")


var router = express.Router()


router.get("/productList", productController.getProductDetails)
router.post("/createproduct",productController.createProduct)



module.exports = router