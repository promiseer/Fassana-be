const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
    },
    last_name: {
      type: String,
    },
    profileImage: {
      type: String,
    },
    about: {
      type: String
    },
    contact: {
      type: Number,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
      trim: true,
    },
    locale: {
      type: String,
      default: "en-IN"
    },
    timezone: {
      type: String,
      default: "Asia/Kolkata"
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    role: {
      type: mongoose.Types.ObjectId,
      ref: "role",
    },
    tasks: [
      {
        type: mongoose.Types.ObjectId,
        ref: "task",
      }
    ],
    teams: [
      {
        type: mongoose.Types.ObjectId,
        ref: "team",
      }
    ],
    projects: [
      {
        type: mongoose.Types.ObjectId,
        ref: "project",
      }
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
