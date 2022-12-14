import React from 'react';
import { Link } from 'react-router-dom';

const ListPlay = () => {
  return (
    <li className="myPlaylist-item">
      <Link to="/">
        <span>
          Mejores raps y covers de anime
        </span>
      </Link >
    </li>
  );
}

export default ListPlay;