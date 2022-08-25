const express = require("express");
const { authenticateToken } = require("../utils/jwt");
const router = express.Router();
const projectController = require("../project/project.controller");

router.get("/getProjects", async (request, response) => {
  const result = await projectController.getAllProjects(request);
  return response.json(result);
});
router.post("/createProject", async (request, response) => {
  const result = await projectController.createProject(request);
  return response.json(result);
});

router.put("/updateProject/:leadId", authenticateToken, async (req, res) => {
  const result = await projectController.updateProject(req);
  return res.json(result);
});
router.put("/deleteProject/:leadId", authenticateToken, async (req, res) => {
  const result = await projectController.deleteProject(req);
  return res.json(result);
});

module.exports = router;
