const mongoose = require("mongoose");
const teamSchema = new mongoose.Schema(
  {
    team_name: {
      type: String,
    },
  },
  { timestamps: true }
);

const Leads = mongoose.model("team", teamSchema);
module.exports = Leads;
