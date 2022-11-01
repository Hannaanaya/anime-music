import React from 'react';
import { Player } from 'video-react';
import "../../node_modules/video-react/dist/video-react.css";
import '../styles/pages/ArtistContent.css';

const ArtistContent = ({ rap, cover, duration, year }) => (
    <div className="ArtistContent">
        <div className="ArtistContentItem">
            <div className="ArtistContentItem-image">
                <Player playsInline
                    className='react-player'
                    src={cover}
                />
            </div>
            <div>
                <h6 className="ArtistContentItem-title">
                    {rap}
                    <h6 className="ArtistContentItem-title">
                        {duration}
                    </h6>
                    <h6 className="ArtistContentItem-title">
                        {year}
                    </h6>
                </h6>
            </div>
        </div>
    </div>
);

export default ArtistContent;