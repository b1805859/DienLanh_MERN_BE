const express = require("express");
const router = express.Router();
const userController = require("../controllers/UserController");
// middleware that is specific to this router
router.post("/", userController.createUser);
module.exports = router;
