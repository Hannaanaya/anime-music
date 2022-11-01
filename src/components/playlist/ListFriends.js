import React from 'react';
import { Link } from 'react-router-dom';
import cero from '../../static/Doblecero.jpg';
import omar from '../../static/omar.jpg';
import david from '../../static/david.jpg';
import '../../styles/components/play.css';

const ListPlay = () => {
    return (
        <React.Fragment>
            <li className="playlistFriends-item">
                <Link to="/cero">
                    <img src={cero} />
                    <span>
                        Doblecero
                    </span>
                </Link>
            </li>

            <li className="playlistFriends-item">
                <a href="/omar">
                    <img src={omar} />
                    <span>
                        Omar Cában
                    </span>
                </a>
            </li>
            <li className="playlistFriends-item">
                <a href="/david">
                    <img src={david} />
                    <span>
                        David Delgado
                    </span>
                </a>
            </li>
        </React.Fragment >

    );
}

export default ListPlay;