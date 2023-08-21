const activityDataAccess = require("./activity.dal");
const ExpressError = require("../utils/appError");
require("../utils/jwt");

exports.getAllActivitys = async (req, res) => {
  const activity = await activityDataAccess.findAll();
  return {
    error: false,
    sucess: true,
    message: "Get all activity Sucessfully",
    data: activity,
  };
};

exports.getActivityByProjectId = async (req) => {
  const _id = req.params.projectId;
  const users = await activityDataAccess.findActivity({ _id: _id });
  return {
    error: false,
    sucess: true,
    message: "Get user",
    data: users,
  };
};

exports.getActivity = async (req) => {
  const _id = req.token_data._id;
  const users = await activityDataAccess.findActivity({ _id: _id });
  return {
    error: false,
    sucess: true,
    message: "Get user",
    data: users,
  };
};

exports.createActivity = async (req, res) => {
  const {
    activity_name,
    activity_description,
    task_id,
    member_id,
    status,
    priority,
    planned_start_date,
    planned_end_date,
    actual_start_date,
    actual_end_date,
  } = req.body;
  if (
    !activity_name ||
    !activity_description ||
    !task_id ||
    !member_id ||
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
    task_id: req.body.task_id,
    member_id: req.body.member_id,
    activity_name: req.body.activity_name,
    activity_description: req.body.activity_description,
    priority: req.body.priority,
    status: req.body.status,
    planned_start_date: req.body.planned_start_date,
    planned_end_date: req.body.planned_end_date,
    actual_start_date: req.body.actual_start_date,
    actual_end_date: req.body.actual_end_date,
  };
  const storedActivity = await activityDataAccess.storeActivity(data);
  return {
    error: false,
    sucess: true,
    message: "activity created successfully",
    data: storedActivity,
  };
};

exports.updateActivity = async (req, res) => {
  const _id = req.params.activityId;
  const updateData = {
    _id,
    toUpdate: {
      task_id: req.body.task_id,
      member_id: req.body.member_id,
      activity_name: req.body.activity_name,
      activity_description: req.body.activity_description,
      priority: req.body.priority,
      status: req.body.status,
      planned_start_date: req.body.planned_start_date,
      planned_end_date: req.body.planned_end_date,
      actual_start_date: req.body.actual_start_date,
      actual_end_date: req.body.actual_end_date,
    },
  };
  const update = await activityDataAccess.updateActivity(updateData);
  return {
    error: false,
    sucess: true,
    message: "updated activity successfully",
    data: update,
  };
};

exports.deleteActivity = async (req, res) => {
  const _id = req.params.activityId;

  const del = await activityDataAccess.deleteActivity({ _id });
  return {
    error: false,
    sucess: true,
    message: "deleted activity successfully",
    data: del,
  };
};
