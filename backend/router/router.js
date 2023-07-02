const express = require("express")
const productController = require("../controllers/productsController")
const userController = require("../controllers/usersController")
const router = require("express").Router();

router.get("/", (req, res) => {
    res.send("hamma")
})

router.get('/med123', userController.getAllusers)

router.post('/addProduct', productController.postProduct)

module.exports = router