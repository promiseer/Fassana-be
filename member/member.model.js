const mongoose = require("mongoose");
const memberSchema = new mongoose.Schema(
  {
    team_id: {
      type: mongoose.Types.ObjectId,
      ref: "team",
    },
    user_id: {
      type: mongoose.Types.ObjectId,
      ref: "user",
    },
    role_id: {
      type: String,
      ref: "role",
    },
  },
  { timestamps: true }
);

const Leads = mongoose.model("member", memberSchema);
module.exports = Leads;
