import React from 'react';
import ListFriends from './ListFriends';
// import '../styles/playlist.css';

const PlaylistFriends = () => {
  return(
    <React.Fragment>
      <div className="sidebarPlaylist">
        <h2 className="sidebarPlaylist-title">Playlist de amigos</h2>
        <ul className="playlistFriends">
          <ListFriends />
          <ListFriends />
          <ListFriends />
        </ul>
      </div>
    </React.Fragment>
  );
}

export default PlaylistFriends;