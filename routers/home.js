const express = require("express");

const HomeRouter = ((nav) => {
    const router = express.Router();
    router.route("/")
    /*.get((req, res) => {
        return res.sendfile(__dirname.replace("routers", "") + "/views/index.html");
    })*/
    .get((req, res) => {
        return res.render("home/index", {
            title: "Hello World",
            nav
        });
    });

    return router;
});

module.exports = HomeRouter;