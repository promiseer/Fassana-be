const orgDataAccess = require("./organization.dal");
const ExpressError = require("../utils/appError");
const { getInvite } = require("../invite/invite.dal");
require("../utils/jwt");

exports.getAllOrgs = async (req, res) => {
  const org = await orgDataAccess.findAll();
  return {
    error: false,
    sucess: true,
    message: "Get all org Sucessfully",
    data: org,
  };
};

exports.createOrg = async (req, res) => {
  createdBy = req.token_data._id;
  const {
    name,
    description,
    logo,
    tags,

  } = req.body;
  if (
    !name ||
    !description
  ) {
    throw new ExpressError(401, "Bad request");
  }
  const data = {
    name,
    description,
    logo,
    tags,
    createdBy

  };
  const storedOrg = await orgDataAccess.storeOrg(data);
  return {
    error: false,
    sucess: true,
    message: "org created successfully",
    data: storedOrg,
  };
};

exports.joinOrg = async (req, res) => {
  createdBy = req.token_data._id;
  const {
    inviteId,
    recipient
  } = req.body;
  if (
    !inviteId ||
    !recipient
  ) {
    throw new ExpressError(401, "Bad request");
  }
  const data = {
    inviteId,
    recipient
  };
  const isInviteExipired = await getInvite(inviteId);
  const joinedOrg = await orgDataAccess.joinOrg(data);
  return {
    error: false,
    sucess: true,
    message: "member joined successfully",
    data: joinedOrg,
  };
};
exports.updateOrg = async (req, res) => {
  const _id = req.params.orgId;
  const updateData = {
    _id,
    toUpdate: {
      name: req.body.name,
      description: req.body.description,
      logo: req.body.logo,
      tags: req.body.tags
    },
  };
  const update = await orgDataAccess.updateOrg(updateData);
  return {
    error: false,
    sucess: true,
    message: "updated org successfully",
    data: update,
  };
};

exports.deleteOrg = async (req, res) => {
  const _id = req.params.orgId;

  const del = await orgDataAccess.deleteOrg({ _id });
  return {
    error: false,
    sucess: true,
    message: "deleted org successfully",
    data: del,
  };
};
