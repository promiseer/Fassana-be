const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const inviteSchema = new mongoose.Schema(
    {
        sender: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user', // Reference to the User model
            required: true
        },
        recipients: [
            {
                email: {
                    type: String,
                    required: true
                },
                status: {
                    type: String,
                    enum: ['pending', 'accepted', 'declined'],
                    default: 'pending'
                },

            }
        ],
        token: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
);
inviteSchema.method.isInviteExpired = () => {
    const invite = this;
    const inviteObject = invite.toObject();

    jwt.verify(inviteObject.token, process.env.JWT_SECRET, (err, data) => {
        if (err) return false
        return true
    });
}
const Invite = mongoose.model("invite", inviteSchema);
module.exports = Invite;
