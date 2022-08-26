const Task = require("./task.model");
const Project = require("../project/project.model");
require("../utils/jwt");

const findTask = async (data) => {
  const task = await Task.findById(data);
  return task;
};
const findTaskByProjectId = async (data) => {
  const task = await Project.findById(data);
  return task;
};

const storeTask = async (projectToStore) => {
  const storedTask = await Task.create(projectToStore);
  return storedTask;
};

const updateTask = async (projectData) => {
  console.log(projectData);
  const task = await Task.findByIdAndUpdate(
    projectData._id,
    { $set: projectData.toUpdate },
    { new: true }
  );
  return task;
};
const deleteTask = async (projectData) => {
  const task = await Task.findByIdAndDelete(projectData._id);
  return task;
};

const findAll = async () => {
  const task = await Task.find({});
  return task;
};

const deleteAll = async () => {
  const task = await Task.remove({});
  return task;
};

module.exports = {
  findTask,
  findTaskByProjectId,
  storeTask,
  updateTask,
  findAll,
  deleteAll,
  deleteTask,
};
