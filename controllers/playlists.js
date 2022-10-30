const Playlist = require('../models/playlist');
const Song = require('../models/song');

module.exports = {
  index
//   new: newSong,
//   create
};

function index(req, res) {
    Playlist.find({}, function(err, playlists) {
        res.render('playlists/index', {title: 'All Playlists', playlists});
    });
}

