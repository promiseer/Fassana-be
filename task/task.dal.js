const Leads = require("./project.model");
require("../utils/jwt");

const createLeads = async (projectToStore) => {
  const storedlead = await Leads.create(projectToStore);
  return storedlead;
};

const findLeads = async () => {
  const goal = await Leads.find();
  return goal;
};

const findUnclaimedLeads = async () => {
  const goal = await Leads.find({ isClaimed: false });
  return goal;
};

const findClaimedLeadsByEmployee = async (claimedLeads) => {
  const goal = await Leads.find(claimedLeads );
  return goal;
};

const claimLead = async (leadData) => {
  const goal = await Leads.findOneAndUpdate(
    leadData.leadId,
    { $set: leadData.toUpdate },
    { new: true }
  );
  return goal;
};

module.exports = { createLeads, findLeads, findUnclaimedLeads,findClaimedLeadsByEmployee, claimLead };
