const Project = require("./project.model");
require("../utils/jwt");

const findProject = async (data) => {
  const project = await Project.findById(data);
  return project;
};

const storeProject = async (projectToStore) => {
  const storedProject = await Project.create(projectToStore);
  return storedProject;
};



const updateProject = async (projectData) => {
  console.log(projectData)
  const project = await Project.findByIdAndUpdate(
    projectData._id,
    { $set: projectData.toUpdate },
    { new: true }
  );
  return project;
};
const deleteProject = async (projectData) => {
  const project = await Project.findByIdAndDelete(projectData._id);
  return project;
};

const findAll = async () => {
  const project = await Project.find({});
  return project;
};

const deleteAll = async () => {
  const project = await Project.remove({});
  return project;
};

module.exports = {
  findProject,
  storeProject,
  updateProject,
  findAll,
  deleteAll,
  deleteProject
};
