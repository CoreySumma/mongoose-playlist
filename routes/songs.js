const express = require('express');
const router = express.Router();
const songsCtrl = require('../controllers/songs');
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.get('/playlists/:id/songs/new', ensureLoggedIn, songsCtrl.new);

router.post('/playlists/:id/songs', ensureLoggedIn, songsCtrl.create);

router.delete('/playlists/:id/songs/:id', ensureLoggedIn, songsCtrl.delete);

module.exports = router;

