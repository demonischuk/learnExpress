const express = require("express");
const NavigationService = require("../services/navationService");

const router = express.Router();
router.route("/books")
    .get((req, res) => {
        return res.render("books/index", {
            title: "Books",
            nav: NavigationService.get()
        });
    });

module.exports = router;