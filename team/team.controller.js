const teamDataAccess = require("./team.dal");
const ExpressError = require("../utils/errorGenerator");
require("../utils/jwt");

exports.getAllTeams = async (req, res) => {
  const team = await teamDataAccess.findAll();
  return {
    error: false,
    sucess: true,
    message: "Get all team Sucessfully",
    data: team,
  };
};

exports.createTeam = async (req, res) => {
  const { team_name } = req.body;
  if (!team_name) {
    throw new ExpressError(401, "Bad request");
  }
  const data = {
    team_name: req.body.team_name,
  };
  const storedTeam = await teamDataAccess.storeTeam(data);
  return {
    error: false,
    sucess: true,
    message: "team created successfully",
    data: storedTeam,
  };
};

exports.updateTeam = async (req, res) => {
  const _id = req.params.teamId;
  const updateData = {
    _id,
    toUpdate: {
      team_name: req.body.team_name,
    },
  };
  const update = await teamDataAccess.updateTeam(updateData);
  return {
    error: false,
    sucess: true,
    message: "updated team successfully",
    data: update,
  };
};

exports.deleteTeam = async (req, res) => {
  const _id = req.params.teamId;

  const del = await teamDataAccess.deleteTeam({ _id });
  return {
    error: false,
    sucess: true,
    message: "deleted team successfully",
    data: del,
  };
};
