import React from 'react';
import cero from '../../static/Doblecero.jpg';
import omar from '../../static/omar.jpg';
import david from '../../static/david.jpg';
// import '../styles/playlist.css';

const ListPlay = () => {
    return(
        <React.Fragment>
        <li className="playlistFriends-item">
            <a href="#">
            <img src={cero} />
                <span>
                  Doblecero 
                </span>
            </a>
        </li>

        <li className="playlistFriends-item">
            <a href="#">
            <img src={omar} />
                <span>
                  Omar Cában
                </span>
            </a>
        </li>
        <li className="playlistFriends-item">
            <a href="#">
            <img src={david} />
                <span>
                  David Delgado
                </span>
            </a>
        </li>
        </React.Fragment>
       
    );
}

export default ListPlay;