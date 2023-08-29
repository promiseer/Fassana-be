const express = require("express");
const { authenticateToken, isAdmin } = require("../utils/jwt");
const router = express.Router();
const teamController = require("./team.controller");

router.get("/getTeams", authenticateToken, async (request, response) => {
  const result = await teamController.getAllTeams(request);
  return response.json(result);
});

router.post(
  "/createTeam",
  authenticateToken,
  isAdmin,
  async (request, response) => {
    const result = await teamController.createTeam(request);
    return response.json(result);
  }
);

router.put(
  "/updateTeam/:teamId",
  authenticateToken,
  isAdmin,
  async (req, res) => {
    const result = await teamController.updateTeam(req);
    return res.json(result);
  }
);
router.delete(
  "/deleteTeam/:teamId",
  authenticateToken,
  isAdmin,
  async (req, res) => {
    const result = await teamController.deleteTeam(req);
    return res.json(result);
  }
);

module.exports = router;
