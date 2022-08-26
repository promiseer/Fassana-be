const roleDataAccess = require("./role.dal");
require("dotenv").config();
const ExpressError = require("../utils/errorGenerator");
const { generateAccessToken } = require("../utils/jwt");

exports.getAllRoles = async (req, res) => {
  const role = await roleDataAccess.findAll();
  return {
    error: false,
    sucess: true,
    message: "Get all role Sucessfully",
    data: role,
  };
};

exports.createRole = async (req, res) => {
  const { _id, role_name } = req.body;
  if (!role_name || 0>_id) {
    throw new ExpressError(401, "Bad request");
  }
  const data = {
    _id: req.body._id,
    role_name: req.body.role_name,
  };
  const storedRole = await roleDataAccess.storeRole(data);
  return {
    error: false,
    sucess: true,
    message: "role created successfully",
    data: storedRole,
  };
};

exports.updateRole = async (req, res) => {
  const _id = req.params.roleId;
  const updateData = {
    _id,
    toUpdate: {
      _id: req.body._id,
      role_name: req.body.role_name,
    },
  };
  const update = await roleDataAccess.updateRole(updateData);
  return {
    error: false,
    sucess: true,
    message: "updated role successfully",
    data: update,
  };
};

exports.deleteRole = async (req, res) => {
  const _id = req.params.roleId;

  const del = await roleDataAccess.deleteRole({ _id });
  return {
    error: false,
    sucess: true,
    message: "deleted role successfully",
    data: del,
  };
};
