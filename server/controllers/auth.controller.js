const RetailerData = require("../mongodb_models/retailerDataModel");
const bcrypt = require("bcryptjs");

const registerUser = async (req, res) => {
  try {
    const { email, retailerId, password } = req.body;
    const registerUserEmail = await RetailerData.find({ email });
    if (registerUserEmail?.length > 0) {
        throw new Error("Retailer already exists with this email.");
    }
    const registerUserID = await RetailerData.find({ retailerId });
    if (registerUserID?.length > 0) {
        throw new Error("Retailer already exists with this ID.");
    }
    const hashedPassword = bcrypt.hashSync(password, 10);
    const retailer = new RetailerData({...req.body, password: hashedPassword});
    await retailer.save();
    res.status(201).json({
      message: `Retailer registered successfully`,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: error.message ?? "An error occurred while registering the retailer." });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email, password);
    const retailer = await RetailerData.find({email});
    const comparePassword = await bcrypt.compare(password, retailer[0].password);
    console.log(comparePassword);
    if (!comparePassword) {
        throw new Error("Invalid password.");
    }
    delete retailer[0].password;
    res.status(200).json({user: retailer[0]});
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message ?? "An error occurred while registering the retailer." });
  }
};

module.exports = { registerUser, loginUser };
