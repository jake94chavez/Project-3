const express = require('express');
const router = express.Router();
var postsController = require('../controllers/posts');
var commentsController = require('../controllers/comments');
const Post = require('../models/post')

router.get('/', function(req, res, next) {
   Post.find({}, function(err, Post) {
    res.json(Post);  
  });
});

//Post Routes
router.get('/api/posts', postsController.index)
router.get('/api/posts/:id', postsController.show)
router.post('/api/posts', postsController.create)
router.put('/api/posts/:id', postsController.update)
router.delete('/api/posts/:id', postsController.destroy)
//Comment Routes
router.get('/api/posts/:id/comments/', commentsController.index)
router.get('/api/posts/:id/comments/:com_id', commentsController.show)
router.post('/api/posts/:id/comments/', commentsController.create)
router.put('/api/posts/:id/comments/:com_id', commentsController.update)
router.delete('/api/posts/:id/comments/:com_id', commentsController.destroy)

module.exports = router;