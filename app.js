const cors = require("cors");
const morgan = require("morgan");
const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./utils/docs/swagger-output.json")
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

//check health
app.get("/api/v1/checkHealth", (req, res) => res.send({ status: true }));

const corsOptions = {
    origin: process.env.WHITE_LIST_ORIGINS, // Specify the allowed origin(s)
    methods: "GET,POST,PUT,DELETE", // Specify the allowed HTTP methods
    allowedHeaders: "Content-Type, Authorization", // Specify the allowed headers
};
const swaggerOptions = {
    swaggerOptions: {
        validatorUrl: null
    }
    , customCss: '.swagger-ui .topbar { display: none }'
}
//middlewears
app.use(cors(corsOptions));
app.use(express.json());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, swaggerOptions));
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

module.exports = app