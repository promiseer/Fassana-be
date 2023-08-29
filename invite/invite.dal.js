const invite = require("./invite.modal");

const createInvite = async (inviteData) => {
    const ivnite = await invite.create(inviteData);
    return ivnite;
};

const getInvite = async (inviteId) => {
    const ivnite = await invite.findById(inviteId);
    return ivnite;
};



module.exports = {
    createInvite,
    getInvite
}