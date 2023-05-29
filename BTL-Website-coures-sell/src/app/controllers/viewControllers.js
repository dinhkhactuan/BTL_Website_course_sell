const Coures = require("../models/coures");
const User = require("../models/Users");
const Lesson = require("../models/lesson_name");
const Docs = require("../models/Docs");
const { isLogin } = require("./AuthorticationControllers");
exports.pageOverView = async (req, res, next) => {
  try {
    const coures = await Coures.find({});

    // const lesson = await Lesson.find({});
    res.status(200).render("home", {
      title: "home",
      coures,
      // lesson,
    });
  } catch (error) {
    res.status(500).json({
      status: "failed",
      error,
    });
  }
};
exports.pageUser = async (req, res, next) => {
  try {
    // const lesson = await Lesson.find({});
    res.status(200).render("user", {
      title: "user",
      // lesson,
    });
  } catch (error) {
    res.status(500).json({
      status: "failed",
      error,
    });
  }
};
exports.pageLogin = async (req, res, next) => {
  try {
    const user = User.findOne(User._id);
    // console.log(user);
    res.render("login", {
      title: "login",
      // user,
    });
  } catch (error) {
    res.status(500).json({
      status: "failed",
      error,
    });
  }
};
exports.pageSignup = async (req, res, next) => {
  try {
    res.status(200).render("login_dangnhap", {
      title: "signup",
    });
  } catch (error) {}
};

exports.pageEditCoures = async (req, res, next) => {
  try {
    res.status(200).render("editCoures", {
      title: "editCoures",
    });
  } catch (error) {}
};
exports.pageCreateCoures = async (req, res, next) => {
  try {
    res.status(200).render("admin/createCoures", {
      title: "createCoures",
    });
  } catch (error) {}
};
// exports.pageProfine = async (req, res, next) => {
//   try {
//     res.status(200).render("pageProfine");
//   } catch (error) {}
// };
exports.pageCart = async (req, res, next) => {
  try {
    const reqid = req.params.id;
    const coures = await Coures.findOneAndUpdate(
      { id: reqid },
      { active: true }
    );
    res.status(200).render("cart", {
      coures,
    });
  } catch (error) {
    console.log(error);
  }
};
exports.pageViewCart = async (req, res, next) => {
  try {
    const coures = await Coures.find({ active: true });
    console.log(coures);
    res.status(200).render("view_carts", {
      coures,
    });
  } catch (error) {
    console.log(error);
  }
};
exports.pageProfile = async (req, res, next) => {
  try {
    const reqid = req.params.id;
    const user = await User.findOne({ id: reqid });
    res.status(200).render("profile", {
      user,
    });
  } catch (error) {
    console.log(error);
  }
};
exports.pageXemSP = async (req, res, next) => {
  try {
    const reqid = req.params.id;
    const coures = await Coures.findOne({ id: reqid });
    console.log(coures);
    res.status(200).render("Xem_san_pham", {
      coures,
    });
  } catch (error) {
    console.log(error);
  }
};
exports.pageAdmin_Profine = async (req, res, next) => {
  // const user = await User.findById();
  // console.log(user);
  try {
    res.status(200).render("admin/profine");
  } catch (error) {
    console.log(error);
  }
};
exports.pageAdmin_Dashboard = async (req, res, next) => {
  try {
    res.status(200).render("admin/Dashboard");
  } catch (error) {
    console.log(error);
  }
};
