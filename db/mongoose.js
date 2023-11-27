const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("DB is Connected");
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error);
  });


module.exports = mongoose;
