const mongoose = require("mongoose");

mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((data) => console.log("connected to the database"))
  .catch((err) => {
    console.log(err.message)
  });

module.exports = mongoose;