const mongoose = require("mongoose");
const org = require("../org/organization.model")
const teamSchema = new mongoose.Schema(
  {
    team_name: {
      type: String,
    },
    description: {
      type: String,
    },
    members: [
      {
        type: mongoose.Types.ObjectId,
        ref: "member"
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
    },
    orgnizationId: {
      type: mongoose.Types.ObjectId,
      required: true
    }
  },
  { timestamps: true }
);

teamSchema.post("save", async () => {
  await org.findByIdAndUpdate(
    this.orgnizationId,
    {
      $addToSet: { teams: this._id }
    }
  )
})

teamSchema.post("remove", async () => {
  await org.findByIdAndUpdate(
    this.orgnizationId,
    {
      $pull: { teams: this._id }
    }
  )
})
const Team = mongoose.model("team", teamSchema);
module.exports = Team;
