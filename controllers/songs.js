const Song = require('../models/song');
const Playlist = require('../models/playlist');

module.exports = {
    new: newSong
};

function newSong(req, res) {
  Song.find({})
  .sort('name')
  .execute(function(err, songs) {
    res.render('songs/new'), {
        title: 'Add Song',
        songs
    }
  });
};