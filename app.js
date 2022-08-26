require("./config/dbConfig");
require("dotenv").config();
require("express-async-errors");

const cors = require("cors");
const morgan = require("morgan");
const express = require("express");
const PORT = process.env.PORT || 3000;

//routes
const authRouters = require("./auth/auth.router");
const userRouters = require("./users/users.router");
const roleRouters = require("./role/role.router");
const projectsRouters = require("./project/project.router");
const taskRouters = require("./task/task.router");
const activityRouters = require("./activity/activity.router");
const teamRouters = require("./team/team.router");
const memberRouters = require("./member/member.router");
const middleware = require("./utils/middleware");

const app = express();
//for test
app.get("/", (req, res) => res.send({ msg: "welcome to my application" }));

//middlewears
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));

app.use("/auth", authRouters);
app.use("/users", userRouters);
app.use("/role", roleRouters);
app.use("/team", teamRouters);
app.use("/member", memberRouters);

app.use("/project", projectsRouters);
app.use("/task", taskRouters);
app.use("/activity", activityRouters);

//errroHandelers
app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

app.listen(PORT, () => {
  console.log(`SERVER IS WORKING AT PORT ${PORT}...`);
});
