const mongoose = require("mongoose");
const projectSchema = new mongoose.Schema(
  {
    project_name: {
      type: String,
    },
    project_description: {
      type: String,
    },
    planned_start_date: {
      type: Date,
    },
    planned_end_date: {
      type: Date,
    },
    actual_start_date: {
      type: Date,
    },
    actual_end_date: {
      type: Date,
    },
  },
  { timestamps: true }
);

projectSchema.post("save", async () => {
  await org.findByIdAndUpdate(
    this.orgnizationId,
    {
      $addToSet: { projects: this._id }
    }
  )
})

projectSchema.post("remove", async () => {
  await org.findByIdAndUpdate(
    this.orgnizationId,
    {
      $pull: { projects: this._id }
    }
  )
})
const Project = mongoose.model("project", projectSchema);
module.exports = Project;
