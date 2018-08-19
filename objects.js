var playlist = {adele:'hello'}
console.log(playlist)
function updatePlaylist (playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  console.log(playlist)
  return playlist
}
function removeFromPlaylist (playlist, artistName) {
  delete playlist.artistName;
  return playlist
}