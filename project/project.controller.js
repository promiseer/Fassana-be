const projectDataAccess = require("./project.dal");
const ExpressError = require("../utils/errorGenerator");
require("../utils/jwt");

exports.getAllProjects = async (req, res) => {
  const project = await projectDataAccess.findAll();
  return {
    error: false,
    sucess: true,
    message: "Get all project Sucessfully",
    data: project,
  };
};

exports.createProject = async (req, res) => {
  const {
    project_name,
    project_description,
    planned_start_date,
    planned_end_date,
    actual_start_date,
    actual_end_date,
  } = req.body;
  if (
    !project_name ||
    !project_description ||
    !planned_start_date ||
    !planned_end_date ||
    !actual_start_date ||
    !actual_end_date
  ) {
    throw new ExpressError(401, "Bad request");
  }
  const data = {
    project_name: req.body.project_name,
    project_description: req.body.project_description,
    planned_start_date: req.body.planned_start_date,
    planned_end_date: req.body.planned_end_date,
    actual_start_date: req.body.actual_start_date,
    actual_end_date: req.body.actual_end_date,
  };
  const storedProject = await projectDataAccess.storeProject(data);
  return {
    error: false,
    sucess: true,
    message: "project created successfully",
    data: storedProject,
  };
};

exports.updateProject = async (req, res) => {
  const _id = req.params.projectId;
  const updateData = {
    _id,
    toUpdate: {
      project_name: req.body.project_name,
      project_description: req.body.project_description,
      planned_start_date: req.body.planned_start_date,
      planned_end_date: req.body.planned_end_date,
      actual_start_date: req.body.actual_start_date,
      actual_end_date: req.body.actual_end_date,
    },
  };
  const update = await projectDataAccess.updateProject(updateData);
  return {
    error: false,
    sucess: true,
    message: "updated project successfully",
    data: update,
  };
};

exports.deleteProject = async (req, res) => {
  const _id = req.params.projectId;

  const del = await projectDataAccess.deleteProject({ _id });
  return {
    error: false,
    sucess: true,
    message: "deleted project successfully",
    data: del,
  };
};
