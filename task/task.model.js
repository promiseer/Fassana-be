const mongoose = require("mongoose");
const taskSchema = new mongoose.Schema(
  {
    task_name: {
      type: String,
    },
    task_description: {
      type: String,
    },
    priority: {
      type: String,
      default: "low",
      enum: ["low", "medium", "high"],
    },
    status: {
      type: String,
      default: "pending",
      enum: ["pending", "progress", "completed", "blocked", "review"],
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
    project: {
      type: mongoose.Types.ObjectId,
      ref: "project",
    },
    assignee: {
      type: mongoose.Types.ObjectId,
      ref: "user",
    },
    collaborators: [{
      type: mongoose.Types.ObjectId,
      ref: "user",
    }],
  },
  { timestamps: true }
);

taskSchema.post("remove", () => {
  let task = this
})
const Task = mongoose.model("task", taskSchema);
module.exports = Task;
