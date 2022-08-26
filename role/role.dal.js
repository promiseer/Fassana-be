const Role = require("./role.model");
require("../utils/jwt");

const findRole = async (data) => {
  const role = await Role.findById(data);
  return role;
};

const storeRole = async (roleToStore) => {
  const storedRole = await Role.create(roleToStore);
  return storedRole;
};



const updateRole = async (roleData) => {
  console.log(roleData)
  const role = await Role.findByIdAndUpdate(
    roleData._id,
    { $set: roleData.toUpdate },
    { new: true }
  );
  return role;
};
const deleteRole = async (roleData) => {
  const role = await Role.findByIdAndDelete(roleData._id);
  return role;
};

const findAll = async () => {
  const role = await Role.find({});
  return role;
};

const deleteAll = async () => {
  const role = await Role.remove({});
  return role;
};

module.exports = {
  findRole,
  storeRole,
  updateRole,
  findAll,
  deleteAll,
  deleteRole
};
