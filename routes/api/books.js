const router = require("express").Router();
const booksController = require("../../controllers/bookController");

// Matches with "/api/books"
router
  .route("/")
  .get(booksController.findAll)
  .post(booksController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);

// Matched with "/api/books/*"
// router
//     .route("*")
//     .get();

module.exports = router;
