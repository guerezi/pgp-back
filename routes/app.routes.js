const dreamController = require("../controllers/dream.controller");
const commentController = require("../controllers/comment.controller");
const notificationController = require("../controllers/notification.controller");
const userController = require("../controllers/user.controller");
const express = require("express");
const router = express.Router();

// Create a new Dream
router.post("/dreams", dreamController.create);

// Retrieve all Dreams
router.get("/dreams", dreamController.findAll);

// Retrieve a single Dream with id
router.get("/dreams/:id", dreamController.findOne);

// Update a Dream with id
router.put("/dreams/:id", dreamController.update);

// // Delete a Dream with id
router.delete("/dreams/:id", dreamController.delete);




// Create a new comment
router.post("/comments", commentController.create);

// Retrieve all Comments
router.get("/comments", commentController.findAll);

// // Retrieve a single comments with id
// router.get("/comments/:id", commentController.findOne);

// Update a comments with id
router.put("/comments/:id", commentController.update);

// // Delete a comments with id
router.delete("/comments/:id", commentController.delete);



// Create a new notification
router.post("/notifications", notificationController.create);

// Retrieve all notification
router.get("/notifications", notificationController.findAll);

// // Retrieve a single notification with id
// router.get("/notifications/:id", notificationController.findOne);

// Update a notification with id
router.put("/notifications/:id", notificationController.update);

// // Delete a notification with id
router.delete("/notifications/:id", notificationController.delete);



// Create a new user
router.post("/users", userController.create);

// // Retrieve all user
// router.get("/users", userController.findAll);

// Retrieve a single user with id
router.get("/users/:id", userController.findOne);

// Update a user with id
router.put("/users/:id", userController.update);

// // Delete a user with id
router.delete("/users/:id", userController.delete);

module.exports = router;
