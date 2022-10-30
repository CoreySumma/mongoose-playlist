// const Song = require('../models/song');
// const Playlist = require('../models/playlist');

// module.exports = {
//     new: newSong,
//     create,
//     addToPlaylist
// }

// function addToPlaylist(req, res) {
//   Playlist.findById(req.params.id, function(err, song) {
//     playlist.song.push(req.body.songId);
//     song.save(function(err) {
//         res.redirect(`/playlists/${playlist._id}`);
//     });
//   });
// }

// function create(req, res) {
//     Song.create(req.body, function(err, song) {
//         res.redirect('/song/new');
//     })
// }

// function newSong(req, res) {
//     Song.find({})
//     .sort('title')
//     .exec(function(err, songs) {
//         res.render('songs/new', {
//             title: 'Add Song',
//             songs
//         });
//     });
// }
