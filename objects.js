var playlist = {adele:'hello'}
console.log(playlist)
function updatePlaylist (playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}
function removeFromPlaylist (playlist, artistName) {
  console.log(artistName)
  var playlist = playlist
  delete playlist.artistname.innerHTML;
  console.log(playlist)
  return playlist
}