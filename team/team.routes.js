const express = require("express");
const { authenticateToken } = require("../utils/jwt");
const router = express.Router();
const teamController = require("../team/team.controller");

router.get("/getTeams", async (request, response) => {
  const result = await teamController.getUnclaimedLeads(request);
  return response.json(result);
});
router.post("/createTeam", async (request, response) => {
  const result = await teamController.createForm(request);
  return response.json(result);
});

router.put("/updateTeam/:teamId", authenticateToken, async (req, res) => {
  const result = await teamController.claimLead(req);
  return res.json(result);
});
router.put("/deleteTeam/:teamId", authenticateToken, async (req, res) => {
  const result = await teamController.claimLead(req);
  return res.json(result);
});

module.exports = router;
