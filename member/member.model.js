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
      type: mongoose.Types.ObjectId,
      ref: "role",
    },
  },
  { timestamps: true }
);

const Member = mongoose.model("member", memberSchema);
module.exports = Member;
