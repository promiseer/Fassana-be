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

const Leads = mongoose.model("project", projectSchema);
module.exports = Leads;
