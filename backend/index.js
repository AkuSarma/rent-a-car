const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const connectDB = require("./db/dbConnect");
const userRoute = require('./routes/user');
const cookieParser = require("cookie-parser");
const { restrictToLoggedInUserOnly } = require("./middlewares/auth");

connectDB();

app.use(express.json());

app.use("/user", userRoute);
// app.use("/addCar", restrictToLoggedInUserOnly, )
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello World!");
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
