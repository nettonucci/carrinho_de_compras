const express = require("express");
const routes = express.Router();

const ProductsController = require("./controllers/ProductsController");
const ProductsSearchController = require("./controllers/ProductsSearchController");

routes.get("/products", ProductsController.index);
routes.post("/productsSearch", ProductsSearchController.index);

module.exports = routes;
