const Playlist = require('../models/playlist');

module.exports = {
  index,
  new: newPlaylist,
  create,
  show
};

function index(req, res) {
    Playlist.find({}, function(err, playlists) {
        res.render('playlists/index', {title: 'All Playlists', playlists});
    });
};

function show(req,res) {
  Playlist.findById(req.params.id)
  .populate('songs')
  .exec(function(err, playlist) {
        res.render('playlists/show', {
          title: 'Songs',
          playlist
        });
      }

    );
  };


function newPlaylist(req, res) {
  res.render('playlists/new', { title: 'Add Playlist' });
};

function create(req, res) {
  // req.body.playlist = req.body.playlist.trim();
  // if(req.body.playlist) req.body.playlist = req.body.playlist.split(/\s*,\s*/);
  // for (let key in req.body) {
  //   if (req.body[key] === '') delete req.body[key];
  // }
  const playlist = new Playlist(req.body);
  playlist.save(function(err) {
    if (err) return res.redirect('/playlists/new');
    res.redirect(`/playlists/${playlists._id}`);
  })
};


