const express = require("express");
const { authenticateToken, isMentor } = require("../utils/jwt");
const router = express.Router();
const projectController = require("../project/project.controller");

router.get("/getProjects", authenticateToken, async (request, response) => {
  const result = await projectController.getAllProjects(request);
  return response.json(result);
});
router.post(
  "/createProject",
  authenticateToken,
  isMentor,
  async (request, response) => {
    const result = await projectController.createProject(request);
    return response.json(result);
  }
);

router.put(
  "/updateProject/:projectId",
  authenticateToken,
  isMentor,
  async (req, res) => {
    const result = await projectController.updateProject(req);
    return res.json(result);
  }
);
router.delete(
  "/deleteProject/:projectId",
  authenticateToken,
  isMentor,
  async (req, res) => {
    const result = await projectController.deleteProject(req);
    return res.json(result);
  }
);

module.exports = router;
