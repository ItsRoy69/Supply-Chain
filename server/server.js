// const path = require("path");
const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");

const connectDB = require("./mongodb_config");
const port = process.env.PORT || 5000;

// mongoDBConnection
connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use("/auth", require("./routes/auth.route"));

app.listen(port, () => console.log(`Server started on port ${port}`));
