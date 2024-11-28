const express = require('express');
const userController = require('../controllers/user_controller');

const router = express.Router();

//user routes
router.get('/users', userController.getAllUsers.bind(userController));
router.get('/users/:username', userController.getUser.bind(userController));
router.post('/users', userController.createUser.bind(userController));
router.post('/users/login', userController.loginUser.bind(userController));


// follow unfollow routes
router.post('/users/:followedId/follow', userController.followUser.bind(userController));
router.delete('/users/:followedId/unfollow', userController.unfollowUser.bind(userController));
router.get('/users/:userId/followers', userController.getfollowers.bind(userController));
router.get('/users/:userID/following', userController.getfollowing.bind(userController));

module.exports = router;

// node module delete
// npm install