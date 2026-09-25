const mongoose = require("mongoose");

const connectToDb = async () => {
  try {
    if (mongoose.connection.readyState === 1) {
      return;
    }

    await mongoose.connect("mongodb://127.0.0.1:27017/job-math");

    console.log("Connected to database!");
  } catch (err) {
    console.error("Database connection error:", err);
    throw err;
  }
};

export default connectToDb;