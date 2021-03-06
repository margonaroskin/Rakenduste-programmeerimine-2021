const router = require("express").Router();
const authController = require("../controllers/auth");
const validationMiddleware = require("../middleware/validationMiddleware");
const { check } = require("express-validator");

router.post(
  "/login",
  [
    check("email")
      .isEmail()
      .normalizeEmail()
      .escape()
      .withMessage("Must be correctly formatted e-mail"),
    check("password")
      .isLength({ min: 6 })
      .escape()
      .withMessage("Must be at least 6 characters long"),
  ],
  validationMiddleware,
  authController.login
);

router.post(
  "/signup",
  [
    check("firstName")
      .isLength({ min: 3 })
      .withMessage("Must be at least 3 characters long")
      .trim()
      .exists()
      .matches(/^[A-ZÕÄÖÜa-zõäöü]+$/)
      .escape()
      .withMessage("Must be alphabetic"),
    check("lastName")
      .isLength({ min: 3 })
      .withMessage("Must be at least 3 characters long")
      .trim()
      .exists()
      .matches(/^[A-ZÕÄÖÜa-zõäöü]+$/)
      .escape()
      .withMessage("Must be alphabetic"),
    check("email")
      .isEmail()
      .normalizeEmail()
      .escape()
      .withMessage("Must be correctly formatted e-mail"),
    check("password")
      .isLength({ min: 6 })
      // .isStrongPassword()
      // hiljem tagasi kui asjad valmis
      .escape()
      .withMessage("Must be at least 6 characters long"),
  ],
  validationMiddleware,
  authController.signup
);

module.exports = router;
