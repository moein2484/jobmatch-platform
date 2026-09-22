const mongoose = require("mongoose");
const connectToDb = async () => {
  try {
    if (mongoose?.connections[0]?.readyState) {
      return false;
    }
    await mongoose.connect("mongodb://127.0.0.1:27017/job-math");
    console.log("Connected to database!");
  } catch (err) {
    console("error=>", err);
  }
};
mongoose
  .connect("mongodb://127.0.0.1:27017/job-math")
  .then(() => console.log("Connected to database!"))
  .catch((error) => console("error=>", error));
export default connectToDb;
