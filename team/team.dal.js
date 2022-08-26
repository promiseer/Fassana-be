const Team = require("./team.model");
require("../utils/jwt");

const findTeam = async (data) => {
  const team = await Team.findById(data);
  return team;
};

const storeTeam = async (projectToStore) => {
  const storedTeam = await Team.create(projectToStore);
  return storedTeam;
};



const updateTeam = async (projectData) => {
  console.log(projectData)
  const team = await Team.findByIdAndUpdate(
    projectData._id,
    { $set: projectData.toUpdate },
    { new: true }
  );
  return team;
};
const deleteTeam = async (projectData) => {
  const team = await Team.findByIdAndDelete(projectData._id);
  return team;
};

const findAll = async () => {
  const team = await Team.find({});
  return team;
};

const deleteAll = async () => {
  const team = await Team.remove({});
  return team;
};

module.exports = {
  findTeam,
  storeTeam,
  updateTeam,
  findAll,
  deleteAll,
  deleteTeam
};
