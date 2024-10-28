const User = require("../model/user");
const { v4: uuidv4 } = require('uuid');
const { setUser } = require("../service/auth")

async function handleUserSignup(req, res) {
    const { name, email, password } = req.body;
    await User.create({ name, email, password });
    return res.send("registered!");
}

async function handleUserLogin(req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });
  if (!user) return res.send("Not registered!");

  const sessionId = uuidv4();
  setUser(user, sessionId);
  res.cookie("uid", sessionId);
  return res.send("Logined")
}

module.exports = {
    handleUserSignup,
    handleUserLogin
}