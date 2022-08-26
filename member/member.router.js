const express = require("express");
const { authenticateToken, isMentor } = require("../utils/jwt");
const router = express.Router();
const memberController = require("./member.controller");

router.get(
  "/getMembers",
  authenticateToken,
  isMentor,
  async (request, response) => {
    const result = await memberController.getAllMembers(request);
    return response.json(result);
  }
);
router.post(
  "/createMember",
  authenticateToken,
  isMentor,
  async (request, response) => {
    const result = await memberController.createMember(request);
    return response.json(result);
  }
);

router.put(
  "/updateMember/:memberId",
  authenticateToken,
  isMentor,
  async (req, res) => {
    const result = await memberController.updateMember(req);
    return res.json(result);
  }
);
router.delete(
  "/deleteMember/:memberId",
  authenticateToken,
  isMentor,
  async (req, res) => {
    const result = await memberController.deleteMember(req);
    return res.json(result);
  }
);

module.exports = router;
