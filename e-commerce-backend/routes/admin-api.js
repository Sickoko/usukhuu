const express = require("express");
const productCategory = require("../models/productCategory");
const Router = express.Router();

Router.get("/categories", (request, response) => {
  const categories = productCategory.find({});

  response.status(200).send({ data: categories });
});

Router.post("/category/add", async (request, response) => {
  const body = request.body;
  console.log(body);
  const category = new productCategory();
  category.product_category_name = body.categoryName;
  category.product_category_description = body.categoryDescription;
  const savedCategory = await category.save();
  response.status(200).send({ data: [] });
});

module.exports = Router;
