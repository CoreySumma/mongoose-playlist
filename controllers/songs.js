const Playlist = require('../models/playlist');

module.exports = {
    new: newSong,
    create
};

function create(req, res) {
    console.log('whatever');
    Playlist.findById(req.params.id, function(err, playlist) {
        req.body.user = req.user._id;
        playlist.songs.push(req.body);
        playlist.save(function(err) {
            console.log(err);
            res.redirect(`/playlists/${playlist._id}`);
        })
    })
}

function newSong(req, res) {
    res.render('songs/new', { title: 'Add Song', playlist: req.params.id });
  }
