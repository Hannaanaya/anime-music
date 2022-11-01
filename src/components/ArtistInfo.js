import React from 'react';
import { Link } from 'react-router-dom';
import music from '../static/music.png';
import '../styles/pages/ArtistPage.css';

const ArtistInfo = ({ foto, name, descripcionA, canal }) => (
    <React.Fragment>
        <div className='image_artist'>
            <img src={foto} alt="" />
        </div>
        <div className='info_artist'>
            <div className='title'>
                <img src={music} alt="icon_music" />
                <h1 className='name_artist'>{name}</h1>
                <img src={music} alt="icon_music" />
            </div>
            <p className='description_artist'><strong>Descripcion: </strong>{descripcionA}</p>
            <strong>Canal de youtube: </strong> <Link to>{canal}</Link>
        </div>
    </React.Fragment>
);

export default ArtistInfo;