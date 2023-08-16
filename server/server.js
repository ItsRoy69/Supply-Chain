// const path = require("path");
const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");

const connectDB = require("./mongodb_config");
const port = process.env.PORT || 5000;

// retailerModel
const RetailerData = require("./mongodb_models/retailerDataModel");

// mongoDBConnection
connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(bodyParser.json());

// POSTRoute -> RetailerRegistration
app.post("/register", async (req, res) => {
  try {
    const retailer = new RetailerData(req.body);
    await retailer.save();
    res.status(201).json({
      message: `Retailer registered successfully :))`,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({error: "An error occurred while registering the retailer."});
  }
});

app.listen(port, () => console.log(`Server started on port ${port}`));
