const express = require("express");
const router = express.Router();
const viewControllers = require("../app/controllers/viewControllers");
const authorzicationControllers = require("../app/controllers/AuthorticationControllers");
const userControllers = require("../app/controllers/UserControllers");

router.get(
  "/CreateCoures",
  authorzicationControllers.protect,
  authorzicationControllers.decentralization("admin"),
  viewControllers.pageCreateCoures
);
router.get(
  "/editCoures",
  authorzicationControllers.protect,
  authorzicationControllers.decentralization("admin"),
  viewControllers.pageEditCoures
);
router.get(
  "/cart/:id",
  authorzicationControllers.isLogin,
  authorzicationControllers.protect,
  viewControllers.pageCart
);
router.get(
  "/view_cart",
  authorzicationControllers.isLogin,
  authorzicationControllers.protect,
  viewControllers.pageViewCart
);
router.get(
  "/user/profile/:id",
  authorzicationControllers.isLogin,
  authorzicationControllers.protect,
  viewControllers.pageProfile
);
router.get(
  "/xemsanpham/:id",
  authorzicationControllers.isLogin,
  viewControllers.pageXemSP
);
router.get(
  "/user/:id",
  authorzicationControllers.isLogin,
  authorzicationControllers.protect,
  viewControllers.pageUser
);
router.get("/signup", viewControllers.pageSignup);
router.get("/login", viewControllers.pageLogin);
router.get(
  "/admin/profine",
  authorzicationControllers.protect,

  viewControllers.pageAdmin_Profine
);
router.get(
  "/admin/Dashboard",
  authorzicationControllers.protect,
  authorzicationControllers.decentralization("admin"),
  viewControllers.pageAdmin_Dashboard
);
router.get(
  "/",
  authorzicationControllers.isLogin,
  viewControllers.pageOverView
);

module.exports = router;
