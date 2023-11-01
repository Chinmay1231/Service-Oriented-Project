var categoryController = require("../controllers/category")

var express = require("express")


var router = express.Router()


router.get("/categories", categoryController.getCategory)
router.post("/createCategory",categoryController.createCategory)



module.exports = router