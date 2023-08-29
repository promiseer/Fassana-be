const mongoose = require("mongoose");
const orgSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    description: {
      type: String,
    },
    logo: {
      type: String,
    },
    tags: {
      type: Array
    },
    teams: [
      {
        type: mongoose.Types.ObjectId,
        ref: "user"
      }
    ],
    members: [
      {
        type: mongoose.Types.ObjectId,
        ref: "user"
      }
    ],
    projects: [
      {
        type: mongoose.Types.ObjectId,
        ref: "project"
      }
    ],
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "user"
    }

  },
  { timestamps: true }
);

const Org = mongoose.model("org", orgSchema);
module.exports = Org;
