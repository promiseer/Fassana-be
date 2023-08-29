const { joinOrg } = require("./organization.controller");
const Org = require("./organization.model");
require("../utils/jwt");

const findOrg = async (data) => {
  const org = await Org.findById(data);
  return org;
};

const storeOrg = async (orgToStore) => {
  const storedOrg = await Org.create(orgToStore);
  return storedOrg;
};

const joinOrg = async (JoinToOrg) => {
  const joinOrg = await Org.findByIdAndUpdate(JoinToOrg._id, { $addToSet: { members: joinOrg.membersId } });
  return joinOrg;
};

const updateOrg = async (orgData) => {
  console.log(orgData)
  const org = await Org.findByIdAndUpdate(
    orgData._id,
    { $set: orgData.toUpdate },
    { new: true }
  );
  return org;
};
const deleteOrg = async (orgData) => {
  const org = await Org.findByIdAndDelete(orgData._id);
  return org;
};

const findAll = async () => {
  const org = await Org.find({});
  return org;
};

const deleteAll = async () => {
  const org = await Org.remove({});
  return org;
};

module.exports = {
  findOrg,
  storeOrg,
  updateOrg,
  findAll,
  deleteAll,
  deleteOrg,
  joinOrg
};
