const {getUser} = require("../service/auth")

async function restrictToLoggedInUserOnly(req, res, next){
    const userUid = req.cookies.uid;
    if (!userUid) return res.send("Login please");

    const user = getUser(userUid);
    if(!user) return res.send("login please");

    next();
}

module.export = restrictToLoggedInUserOnly;