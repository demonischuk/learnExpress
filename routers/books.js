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
router.route("/books/:id")
    .get((req, res) => {
        const { id } = req.params;

        return res.render("books/index", {
            title: `Book ${id}`,
            nav: NavigationService.get()
        });
    });

module.exports = router;