const express = require("express");
const userController = require("../controllers/user.controller");
const router = express.Router();

router.get('/all', (userController.getAllUser))
router.get('/random', userController.getRandomUser)
router.post('/save', (userController.saveUser))
router.patch('/update/:id', (userController.singleUpdateUser))
router.delete('/delete/:id', (userController.deleteUser))

module.exports = router;

