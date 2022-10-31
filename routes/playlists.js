var express = require('express');
var router = express.Router();
const playlistsCtrl = require('../controllers/playlists')
const ensureLoggedIn = require('../config/ensureLoggedIn');

// GET display all songs
router.get('/', playlistsCtrl.index);
// GET /playlists/new (display for for new playlist)
router.get('/new', ensureLoggedIn, playlistsCtrl.new);
// GET /playlists/:id (display show page for current songs/add song/add review buttons)
router.get('/:id', playlistsCtrl.show)
// POST /playlists (handles submission for a new playlist and posts it)
router.post('/', ensureLoggedIn, playlistsCtrl.create);

module.exports = router;



