const inviteDataAccess = require("./invite.dal");
const ExpressError = require("../utils/appError");
const { generateAccessToken } = require("../utils/jwt");


exports.invite = async (req, res) => {
    const sender = req.token_data._id;
    const token = generateAccessToken({ _id: req.token_data._id, role: req.token_data.role }, "1day");
    const {
        recipients,
    } = req.body;
    if (
        !sender ||
        !recipients.length ||
        !token
    ) {
        throw new ExpressError(401, "Bad request");
    }
    const data = {
        sender,
        recipients,
        token
    };
    const inviteExists = await inviteDataAccess.getInvite();

    const createInvite = await inviteDataAccess.createInvite(data);
    return {
        error: false,
        sucess: true,
        message: "invite created successfully",
        data: createInvite,
    };
};