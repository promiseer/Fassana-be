const Member = require("./member.model");
require("../utils/jwt");

const findMember = async (data) => {
  const member = await Member.findById(data);
  return member;
};

const storeMember = async (projectToStore) => {
  const storedMember = await Member.create(projectToStore);
  return storedMember;
};



const updateMember = async (projectData) => {
  console.log(projectData)
  const member = await Member.findByIdAndUpdate(
    projectData._id,
    { $set: projectData.toUpdate },
    { new: true }
  );
  return member;
};
const deleteMember = async (projectData) => {
  const member = await Member.findByIdAndDelete(projectData._id);
  return member;
};

const findAll = async () => {
  const member = await Member.find({});
  return member;
};

const deleteAll = async () => {
  const member = await Member.remove({});
  return member;
};

module.exports = {
  findMember,
  storeMember,
  updateMember,
  findAll,
  deleteAll,
  deleteMember
};
