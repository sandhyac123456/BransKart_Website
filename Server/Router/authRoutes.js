const express = require("express");
const router = express.Router();
const { forgotPassword, resetPassword ,register,login} = require('../controllers/authControllers');


router.post("/forgot-password",  forgotPassword);
router.put("/reset-password/:token", resetPassword);
router.post("/register", register);
router.post("/login", login);


module.exports = router;
