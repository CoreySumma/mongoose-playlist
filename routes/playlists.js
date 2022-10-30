var express = require('express');
var router = express.Router();
const playlistsCtrl = require('../controllers/playlists')   // Now I have to make the controller
const ensureLoggedIn = require('../config/ensureLoggedIn');

// GET display all songs
router.get('/', playlistsCtrl.index);



// GET display a form to input a new song!
// router.get('/new', ensureLoggedIn, playlistsCtrl.new);

// // POST handle the form submission for a new song!
// router.post('/', ensureLoggedIn, playlistsCtrl.create);

module.exports = router;



