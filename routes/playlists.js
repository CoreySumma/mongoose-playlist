var express = require('express');
var router = express.Router();
const playlistsCtrl = require('../controllers/playlists')
const ensureLoggedIn = require('../config/ensureLoggedIn');

// GET display all songs
router.get('/', ensureLoggedIn, playlistsCtrl.index);
// GET /playlists/new (display form for new playlist)
router.get('/new', ensureLoggedIn, playlistsCtrl.new);
// GET /playlists/:id (display show page for current songs/add song/add review buttons)
router.get('/:id', ensureLoggedIn, playlistsCtrl.show)
// POST /playlists (handles submission for a new playlist and posts it)
router.post('/', playlistsCtrl.create);
// GET /playlists/:id/edit (edit playlist name)
router.get('/:id/edit', ensureLoggedIn, playlistsCtrl.edit);
// PUT /playlists/:id (update playlist name)
router.put('/:id', ensureLoggedIn, playlistsCtrl.update);

module.exports = router;



