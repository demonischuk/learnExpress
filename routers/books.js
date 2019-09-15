const express = require("express");

const BooksRouter = ((nav) => {
    const router = express.Router();
    router.route("/books")
        .get((req, res) => {
            return res.render("books/index", {
                title: "Books",
                nav
            });
        });
    router.route("/books/:id")
        .get((req, res) => {
            const { id } = req.params;
    
            return res.render("books/index", {
                title: `Book ${id}`,
                nav
            });
        });

        return router;
});

module.exports = BooksRouter;