//Imports the Mongoose library
const mongoose = require("mongoose");

//Function to establish a connection to the MongoDB database
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.ATLAS_URI);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Failed to connect to MongoDB", err);

    // Exit the process with a failure code (1) if unable to connect to the database
    process.exit(1);
  }
};

module.exports = connectDB;
