const router = require('express').Router();
const todoController = require("../controller/todoController");

// POST
router.route("/todos").post((req, res) => todoController.create(req, res));

// GET
router.route("/todos").get((req, res) => todoController.getAll(req, res));

// PUT
router.route("/todos/:id").put((req, res) => todoController.update(req, res));

// DELETE
router.route("/todos/:id").delete((req, res) => todoController.delete(req, res));

// router.route("/todos").get((req, res) => todoController.search(req, res));

module.exports = router;
