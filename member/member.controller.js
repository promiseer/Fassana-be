const memberDataAccess = require("./member.dal");
const ExpressError = require("../utils/errorGenerator");
require("../utils/jwt");

exports.getAllMembers = async (req, res) => {
  const member = await memberDataAccess.findAll();
  return {
    error: false,
    sucess: true,
    message: "Get all member Sucessfully",
    data: member,
  };
};

exports.createMember = async (req, res) => {
  const { team_id, user_id, role_id } = req.body;
  if (!team_id || !user_id || !role_id) {
    throw new ExpressError(401, "Bad request");
  }
  const data = {
    team_id: req.body.team_id,
    user_id: req.body.user_id,
    role_id: req.body.role_id,
  };
  const storedMember = await memberDataAccess.storeMember(data);
  return {
    error: false,
    sucess: true,
    message: "member created successfully",
    data: storedMember,
  };
};

exports.updateMember = async (req, res) => {
  const _id = req.params.memberId;
  const updateData = {
    _id,
    toUpdate: {
      _id: req.body._id,
      team_id: req.body.team_id,
      user_id: req.body.user_id,
      role_id: req.body.role_id,
    },
  };
  const update = await memberDataAccess.updateMember(updateData);
  return {
    error: false,
    sucess: true,
    message: "updated member successfully",
    data: update,
  };
};

exports.deleteMember = async (req, res) => {
  const _id = req.params.memberId;

  const del = await memberDataAccess.deleteMember({ _id });
  return {
    error: false,
    sucess: true,
    message: "deleted member successfully",
    data: del,
  };
};
