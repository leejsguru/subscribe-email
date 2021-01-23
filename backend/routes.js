const express = require('express');
const UserController = require('./app/controllers/UserController');
const TopicController = require('./app/controllers/TopicController');

const router = new express.Router();

router.get('/api/user', UserController.index);

router.post('/api/user', UserController.create);

router.put('/api/user/:id', UserController.update);

router.delete('/api/user/:id', UserController.destroy);

// subscribe
router.post('/api/subscribe', TopicController.create);

module.exports = router;