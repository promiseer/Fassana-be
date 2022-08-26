const Activity = require("./activity.model");
const Task = require("../task/task.model");
require("../utils/jwt");

const findActivity = async (data) => {
  const activity = await Activity.findById(data);
  return activity;
};
const findActivityByTaskId = async (data) => {
  const activity = await Task.findById(data);
  return activity;
};

const storeActivity = async (activityToStore) => {
  const storedActivity = await Activity.create(activityToStore);
  return storedActivity;
};

const updateActivity = async (activityData) => {
  const activity = await Activity.findByIdAndUpdate(
    activityData._id,
    { $set: activityData.toUpdate },
    { new: true }
  );
  return activity;
};
const deleteActivity = async (activityData) => {
  const activity = await Activity.findByIdAndDelete(activityData._id);
  return activity;
};

const findAll = async () => {
  const activity = await Activity.find({});
  return activity;
};

const deleteAll = async () => {
  const activity = await Activity.remove({});
  return activity;
};

module.exports = {
  findActivity,
  findActivityByTaskId,
  storeActivity,
  updateActivity,
  findAll,
  deleteAll,
  deleteActivity,
};
