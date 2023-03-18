const cors = require("cors");
const morgan = require("morgan");
const express = require("express");
const app = express();

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
const globalErrorHandler = require("./utils/errorGenerator")

//for test
app.get("/", (req, res) => res.send({ msg: "welcome to my application" }));

//middlewears
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1/auth", authRouters);
app.use("/api/v1/users", userRouters);
app.use("/api/v1/role", roleRouters);
app.use("/api/v1/team", teamRouters);
app.use("/api/v1/member", memberRouters);

app.use("/api/v1/project", projectsRouters);
app.use("/api/v1/task", taskRouters);
app.use("/api/v1/activity", activityRouters);

//errroHandelers
app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);
app.use(globalErrorHandler)

module.exports=app