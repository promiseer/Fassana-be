const mongoose = require("mongoose");
const taskSchema = new mongoose.Schema(
  {
    task_name: {
      type: String,
    },
    priority: {
      type: String,
    },
    status: {
      type: Boolean,
      default: false,
    },
    project_id: {
      type: mongoose.Types.ObjectId,
    },
    planned_start_budget: {
      type: Number,
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

// Estimated duration
// ii. Final time
// iii. Status for completed(checkbox)
// iv. Comment
// v. Reply
// vi. QA
// vii. Code quality
// viii. Approved by client
// ix. Developer name
// x. date

const Leads = mongoose.model("task", taskSchema);
module.exports = Leads;
