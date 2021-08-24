import React from 'react';
import ListPlay from './ListPlay';
// import '../styles/playlist.css';

const Playlist = () => {
  return (
    <React.Fragment>
      <div className="sidebarPlaylist">
        <h2 className="sidebarPlaylist-title">
          Mi Playlist 
        <span className="btn warning">
          Escuchar Playlist
        </span></h2>
          <ol className="myPlaylist">
            <ListPlay />
            <ListPlay />
            <ListPlay />
            <ListPlay />
            <ListPlay />
            <ListPlay />
            <ListPlay />
            <ListPlay />
            <ListPlay />
            <ListPlay />
        </ol>
      </div>     
    </React.Fragment>
  );
}

export default Playlist;