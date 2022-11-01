const Playlist = require('../models/playlist');

module.exports = {
    new: newSong,
    create,
    delete: deleteSong
};  

function deleteSong(req, res, next) {
    Playlist.findOne({
        'songs._id': req.params.id
    }).then((playlist) => {
      if (!playlist) return res.redirect('/playlists');
      playlist.songs.remove(req.params.id);
      playlist.save().then(() => {
        res.redirect(`/playlists/${playlist._id}`);
      }).catch((err) => {
        return next(err);
      });
    });
};

function create(req, res) {
    Playlist.findById(req.params.id, (err, playlist) => {
        req.body.user = req.user._id;
        playlist.songs.push(req.body);
        playlist.save((err) => {
            res.redirect(`/playlists/${playlist._id}`);
        })
    })
}

function newSong(req, res) {
    res.render('songs/new', { title: 'Add Song', playlist: req.params.id });
  }
