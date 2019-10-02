const express = require("express");

const BooksRouter = ((nav, db) => {
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

            
            db.query("SELECT * FROM Airport WHERE Id = @id;", {
                id: id
            }).then(result => {
                console.log("Query results", result.recordset);
            });
    
            return res.render("books/index", {
                title: `Book ${id}`,
                nav
            });
        });

        return router;
});

module.exports = BooksRouter;