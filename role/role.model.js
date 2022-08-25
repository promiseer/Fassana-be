const mongoose = require("mongoose");
const roleSchema = new mongoose.Schema(
  {
    _id: {
      type: Number,
    },
    role_name: {
      type: String,
    },
  },
  { timestamps: true }
);

const Leads = mongoose.model("role", roleSchema);
module.exports = Leads;
