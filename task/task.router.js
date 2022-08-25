const express = require("express");
const { authenticateToken } = require("../utils/jwt");
const router = express.Router();
const taskController = require("../task/task.controller");

router.get("/getTasks", async (request, response) => {
  const result = await taskController.getUnclaimedLeads(request);
  return response.json(result);
});
router.post("/createTask", async (request, response) => {
  const result = await taskController.createForm(request);
  return response.json(result);
});

router.put("/updateTask/:leadId", authenticateToken, async (req, res) => {
  const result = await taskController.claimLead(req);
  return res.json(result);
});
router.put("/deleteTask/:leadId", authenticateToken, async (req, res) => {
  const result = await taskController.claimLead(req);
  return res.json(result);
});

module.exports = router;
