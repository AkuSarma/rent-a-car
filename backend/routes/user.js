const express = require("express");
const router = express.Router();
const { handleUserSignup, handleUserLogin } = require("../controller/user");

router.post('/signup', handleUserSignup);
router.post('/login', handleUserLogin);


module.exports = router