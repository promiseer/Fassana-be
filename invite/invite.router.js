const express = require("express");
const { authenticateToken, isAdmin } = require("../utils/jwt");
const router = express.Router();
const inviteController= require("./invite.controller")

router.post(
    "/invite",
    authenticateToken,
    // isAdmin,
    async (request, response) => {
        const result = await inviteController.invite(request);
        return response.json(result);
    }
);


module.exports = router;