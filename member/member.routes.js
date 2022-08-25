const express = require("express");
const { authenticateToken } = require("../utils/jwt");
const router = express.Router();
const memberController = require("../member/member.controller");

router.get("/getMembers", async (request, response) => {
  const result = await memberController.getUnclaimedLeads(request);
  return response.json(result);
});
router.post("/createMember", async (request, response) => {
  const result = await memberController.createForm(request);
  return response.json(result);
});

router.put("/updateMember/:memberId", authenticateToken, async (req, res) => {
  const result = await memberController.claimLead(req);
  return res.json(result);
});
router.put("/deleteMember/:memberId", authenticateToken, async (req, res) => {
  const result = await memberController.claimLead(req);
  return res.json(result);
});

module.exports = router;
