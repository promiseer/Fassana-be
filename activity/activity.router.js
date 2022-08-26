const express = require("express");
const { authenticateToken } = require("../utils/jwt");
const router = express.Router();
const activityController = require("../activity/activity.controller");

router.get("/getActivitys", async (request, response) => {
  const result = await activityController.getAllActivitys(request);
  return response.json(result);
});
router.get("/getActivityByProject/:projectId", async (request, response) => {
  const result = await activityController.getActivityByProjectId(request);
  return response.json(result);
});
router.get("/getActivity/:activityId", async (request, response) => {
  const result = await activityController.getActivity(request);
  return response.json(result);
});
router.post("/createActivity", async (request, response) => {
  const result = await activityController.createActivity(request);
  return response.json(result);
});

router.put("/updateActivity/:activityId", authenticateToken, async (req, res) => {
  const result = await activityController.updateActivity(req);
  return res.json(result);
});
router.delete("/deleteActivity/:activityId", authenticateToken, async (req, res) => {
  const result = await activityController.deleteActivity(req);
  return res.json(result);
});

module.exports = router;
