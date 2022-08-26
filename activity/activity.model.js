const mongoose = require("mongoose");
const activitySchema = new mongoose.Schema(
  {
    activity_name: {
      type: String,
    },
    activity_description: {
      type: String,
    },
    priority: {
      type: String,
    },
    status: {
      type: String,
      default: "pending",
      enum: ["pending", "completed"],
    },
    task_id: {
      type: mongoose.Types.ObjectId,
      ref: "task",
    },
    member_id: {
      type: mongoose.Types.ObjectId,
      ref: "member",
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

const Activity = mongoose.model("activity", activitySchema);
module.exports = Activity;
