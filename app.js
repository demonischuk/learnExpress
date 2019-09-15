const chalk = require("chalk");
const express = require("express");
/*use "npm run-script debug"*/
const debug = require("debug")("app");
const morgan = require("morgan");
const path = require("path");

const app = express();

app.use(morgan("tiny"));
app.use(express.static(path.join(__dirname, "public")));

app.use("/css", express.static(path.join(__dirname, "/node_modules/bootstrap/dist/css")));
app.use("/js", express.static(path.join(__dirname, "/node_modules/bootstrap/dist/js")));
app.use("/js", express.static(path.join(__dirname, "/node_modules/jquery/dist")));

app.set("views", "./src/views");
//app.set("view engine", "pug");
app.set("view engine", "ejs");

app.use("/", require("./routers/home"));
app.use("/", require("./routers/books"));

const port = 3000;

app.listen(port, () => {
    debug(chalk.blue(`Listening on port ${port}`));
}); 