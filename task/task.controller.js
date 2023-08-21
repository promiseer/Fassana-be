const taskDataAccess = require("./task.dal");
const ExpressError = require("../utils/appError");
require("../utils/jwt");

exports.getAllTasks = async (req, res) => {
  const task = await taskDataAccess.findAll();
  return {
    error: false,
    sucess: true,
    message: "Get all task Sucessfully",
    data: task,
  };
};

exports.getTaskByProjectId = async (req) => {
  const _id = req.params.projectId;
  const users = await taskDataAccess.findTask({ _id: _id });
  return {
    error: false,
    sucess: true,
    message: "Get user",
    data: users,
  };
};

exports.getTask = async (req) => {
  const _id = req.token_data._id;
  const users = await taskDataAccess.findTask({ _id: _id });
  return {
    error: false,
    sucess: true,
    message: "Get user",
    data: users,
  };
};

exports.createTask = async (req, res) => {
  const {
    task_name,
    task_description,
    project_id,
    status,
    priority,
    planned_start_budget,
    planned_start_date,
    planned_end_date,
    actual_start_date,
    actual_end_date,
  } = req.body;
  if (
    !task_name ||
    !task_description ||
    !project_id ||
    !planned_start_budget ||
    !priority ||
    !status ||
    !planned_start_date ||
    !planned_end_date ||
    !actual_start_date ||
    !actual_end_date
  ) {
    throw new ExpressError(401, "Bad request");
  }
  const data = {
    project_id: req.body.project_id,
    task_name: req.body.task_name,
    task_description: req.body.task_description,
    priority: req.body.priority,
    status: req.body.status,
    task_description: req.body.task_description,
    planned_start_budget: req.body.planned_start_budget,
    planned_start_date: req.body.planned_start_date,
    planned_end_date: req.body.planned_end_date,
    actual_start_date: req.body.actual_start_date,
    actual_end_date: req.body.actual_end_date,
  };
  const storedTask = await taskDataAccess.storeTask(data);
  return {
    error: false,
    sucess: true,
    message: "task created successfully",
    data: storedTask,
  };
};

exports.updateTask = async (req, res) => {
  const _id = req.params.taskId;
  const updateData = {
    _id,
    toUpdate: {
      project_id: req.body.project_id,
      task_name: req.body.task_name,
      task_description: req.body.task_description,
      priority: req.body.priority,
      status: req.body.status,
      task_description: req.body.task_description,
      planned_start_budget: req.body.planned_start_budget,
      planned_start_date: req.body.planned_start_date,
      planned_end_date: req.body.planned_end_date,
      actual_start_date: req.body.actual_start_date,
      actual_end_date: req.body.actual_end_date,
    },
  };
  const update = await taskDataAccess.updateTask(updateData);
  return {
    error: false,
    sucess: true,
    message: "updated task successfully",
    data: update,
  };
};

exports.deleteTask = async (req, res) => {
  const _id = req.params.taskId;

  const del = await taskDataAccess.deleteTask({ _id });
  return {
    error: false,
    sucess: true,
    message: "deleted task successfully",
    data: del,
  };
};
