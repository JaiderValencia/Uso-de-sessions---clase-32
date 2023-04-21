const cookieParser = require("cookie-parser");
const express = require("express");
const session = require("express-session");
const path = require("path");

const app = express();

app.use(cookieParser())

const mainRoutes = require("./routes/mainRoutes.js");


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(session({ secret: "secret" }));


app.use("/", mainRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server started on http://localhost:${port}`);
});
