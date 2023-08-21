app = require("./app");
require("./config/dbConfig");
require("dotenv").config();
require("express-async-errors");

const PORT = process.env.PORT || 3000;


process.on("uncaughtException", (error) => {
  console.log("unhandleRejection shutting down the application");
  console.log(error.name, error.message);
  process.exit(1);
});

process.on("unhandledRejection", (err) => {
  console.log("UnhandleRejection Shutting down the application");
  console.log(err)
  console.log(err.name, err.message);
  process.exit(1);
});

app.listen(PORT, () => {
  console.log(`SERVER IS WORKING AT PORT ${PORT}...`);
});
