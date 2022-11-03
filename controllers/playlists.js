const Playlist = require('../models/playlist');

module.exports = {
  index,
  new: newPlaylist,
  create,
  show,
  edit,
  update
};

function update(req, res) {
  console.log(req.body);
  Playlist.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true },
    function (err, playlist) {
      if (err || !playlist) return res.redirect('/playlists');
      res.redirect(`/playlists/${playlist._id}`);
    }
  );
}

function edit(req, res) {
  Playlist.findById(req.params.id, (err, playlist) => {
    res.render('playlists/edit', {
      title: 'New Vibe',
      playlist
    });
  });
};

function index(req, res) {
  Playlist.find({}, (err, playlists) => {
    res.render('playlists/index', { title: 'All Playlists', playlists });
  });
};

function show(req, res) {
  Playlist.findById(req.params.id)
    .populate('songs')
    .exec(function (err, playlist) {
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
  playlist.save((err) => {
    if (err) return res.redirect('/playlists/new');
    res.redirect(`/playlists/${playlist._id}`);
  })
};



