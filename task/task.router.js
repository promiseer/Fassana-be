const express = require("express");
const { authenticateToken } = require("../utils/jwt");
const router = express.Router();
const taskController = require("../task/task.controller");

router.get("/getTasks", async (request, response) => {
  const result = await taskController.getAllTasks(request);
  return response.json(result);
});
router.get("/getTaskByProject/:projectId", async (request, response) => {
  const result = await taskController.getTaskByProjectId(request);
  return response.json(result);
});
router.get("/getTask/:taskId", async (request, response) => {
  const result = await taskController.getTask(request);
  return response.json(result);
});
router.post("/createTask", async (request, response) => {
  const result = await taskController.createTask(request);
  return response.json(result);
});

router.put("/updateTask/:taskId", authenticateToken, async (req, res) => {
  const result = await taskController.updateTask(req);
  return res.json(result);
});
router.delete("/deleteTask/:taskId", authenticateToken, async (req, res) => {
  const result = await taskController.deleteTask(req);
  return res.json(result);
});

module.exports = router;
