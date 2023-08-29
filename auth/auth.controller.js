const usersDataAccess = require("./auth.dal");
const bcrypt = require("bcrypt");
const momen = require("moment-timezone");
require("dotenv").config();
const ExpressError = require("../utils/appError");
const { generateAccessToken } = require("../utils/jwt");

exports.createUser = async (req) => {
  const { email, password, first_name, last_name, contact, isAdmin, role } =
    req.body;
  if (
    !password ||
    !email ||
    !first_name ||
    !last_name ||
    !contact
  ) {
    throw new ExpressError(401, "Bad request");
  }
  const passwordHash = bcrypt.hashSync(req.body.password, 10);
  const data = {
    profileImage: "uploads/1633780506772defaultImage.jpg",
    isVerified: false,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    contact: req.body.contact,
    email: req.body.email,
    password: passwordHash,
  };
  const storedUser = await usersDataAccess.storeUser(data);

  return {
    error: false,
    sucess: true,
    message: "user created successfully",
    data: storedUser,
  };
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return new ExpressError(
      401,
      "Either username or password is missing in the request."
    );
  }
  const userData = await usersDataAccess.findUserByEmail({
    email: req.body.email,
  });
  if (!userData) {
    return new ExpressError(404, "email not found in the database.");
  }
  const match = bcrypt.compareSync(req.body.password, userData.password);
  if (!match) {
    return new ExpressError(403, "Invalid password");
  }
  const token = generateAccessToken({ _id: userData._id, role: userData.role });
  return {
    error: false,
    sucess: true,
    message: "login user successfully",
    data: userData,
    token,
  };
};

exports.forgotPassword = async (req, res) => {
  const { email } = req.body;
  if (!email) {
    return new ExpressError(401, "Either email is missing in the request.");
  }
  const userData = await usersDataAccess.findUserByUsername({
    email: req.body.email,
  });
  if (!userData) {
    return new ExpressError(404, "email does not exists");
  }
  const otpSend = {
    from: process.env.email,
    to: userData.email,
    subject: "Sending email using node.js",
    text: `http://localhost:3001/Resetpassword/${userData._id}`,
  };
  myFunction(otpSend);
  return {
    error: false,
    sucess: true,
    message: "forgot password email send successfully",
    data: userData,
  };
};

exports.verifyEmail = async (req, res) => {
  const { _id } = req.body;
  if (!_id) {
    throw new ExpressError(401, "plz enter the  _id");
  }
  const updateData = {
    _id,
    toUpdate: {
      isVerified: true,
    },
  };
  const update = await usersDataAccess.updateUser(updateData);
  return {
    error: false,
    sucess: true,
    message: "email is verified successfully",
    verify: update,
  };
};

exports.resetPassword = async (req, res) => {
  const { _id, newPassword } = req.body;
  if (!_id || !newPassword) {
    throw new ExpressError(401, "plz enter the  _id or newPassword");
  }
  const password = bcrypt.hashSync(newPassword, 10);
  const updateData = {
    _id,
    toUpdate: {
      password: password,
    },
  };
  const updatePass = await usersDataAccess.updateUser(updateData);
  return {
    error: false,
    sucess: true,
    message: "reset password successfully",
    data: updatePass,
  };
};

const loginU = async (email) => {
  const data = await usersDataAccess.findUserByUsername({
    email,
  });
  const token = generateAccessToken({ _id: data._id });
  return {
    error: false,
    sucess: true,
    message: "login google oauth successfully",
    data: data,
    token,
  };
};

exports.success = async (req, res) => {
  try {
    const oauth = req.user;
    const userData = await usersDataAccess.findUserByUsername({
      email: oauth.email,
    });
    if (!userData) {
      const data = {
        profileImage: "uploads/1633780506772defaultImage.jpg",
        isVerified: false,
        first_name: oauth.given_name,
        last_name: oauth.family_name,
        email: oauth.email,
      };
      await usersDataAccess.storeUser(data);
    }
    return loginU(oauth.email);
  } catch (err) {
    return new ExpressError(500, err.message);
  }
};
