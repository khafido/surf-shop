const express = require('express');
const router = express.Router();

/* GET posts page. */

// GET     index    /posts
router.get('/', function(req, res, next) {
  res.send('/posts');
  // res.render('posts', { title: 'Surf Shop - Posts' });
});

// GET     new      /posts/new
router.get('/new', function(req, res, next) {
  res.send('/posts/new');
});

// GET     show     /posts/:id
router.get('/:id', function(req, res, next) {
  res.send('SHOW /posts/:id');
});

// GET     edit     /posts/:id/edit
router.get('/:id/edit', function(req, res, next) {
  res.send('EDIT /posts/:id/edit');
});

// POST    create   /posts
router.post('/:id', function(req, res, next) {
  res.send('CREATE /posts');
});

// PUT     update   /posts/:id
router.put('/:id', function(req, res, next) {
  res.send('UPDATE /posts');
});

// DELETE  destroy  /posts/:id
router.delete('/:id', function(req, res, next) {
  res.send('DELETE /posts');
});

module.exports = router;
