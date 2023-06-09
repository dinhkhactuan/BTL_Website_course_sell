const User = require("../models/Users");
const handleFactory = require("./handleFactory");

exports.UpdateUser = async (req, res, next) => {
  try {
    const { password, confirmpassword } = req.body;
    if (password || confirmpassword)
      return res.status(500).json({
        message: "không được chỉnh sủa mật khẩu",
      });
    const newUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        username: req.body.username,
        email: req.body.email,
      },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!newUser) return res.status(500).json("user ko tồn tại");
    res.status(200).json({
      status: "success",
      Document: newUser,
    });
  } catch (err) {
    res.status(200).json({
      status: "failed",
      err,
    });
  }
};
exports.DeleteUserMe = async (req, res, next) => {
  try {
    const newUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        active: false,
      },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!newUser) return res.status(500).json("user ko tồn tại");
    res.status(200).json({
      status: "success",
      Document: newUser,
    });
  } catch (err) {
    res.status(200).json({
      status: "failed",
      err,
    });
  }
};

exports.GetUser = handleFactory.GetUser(User);
exports.getAllUser = handleFactory.getAllResources(User);
exports.DeleteUser = handleFactory.DeleteResources(User);
