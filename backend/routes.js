const express = require('express');
const UserController = require('./app/controllers/UserController');
const TopicController = require('./app/controllers/TopicController');
const BroadcastController = require('./app/controllers/BroadcastController');

const router = new express.Router();

router.get('/api/user', UserController.index);

router.post('/api/user', UserController.create);

router.put('/api/user/:id', UserController.update);

router.delete('/api/user/:id', UserController.destroy);

// subscribe
router.post('/api/subscribe', TopicController.create);
router.get('/api/topic', TopicController.listAll)
router.post('/api/broadcast', BroadcastController.broadcast);
router.get('/api/broadcast', BroadcastController.listAll);
router.get('/api/broadcast/:id', BroadcastController.get);

module.exports = router;