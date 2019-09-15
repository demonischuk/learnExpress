const express = require("express");

const router = express.Router();
router.route("/books")
    .get((req, res) => {
        return res.render("books/index", {
            title: "Hello Books"
        });
    });

module.exports = router;