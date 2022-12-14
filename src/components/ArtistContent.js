import React from 'react';
import { Player } from 'video-react';
import "../../node_modules/video-react/dist/video-react.css";
import '../styles/pages/ArtistContent.css';

const ArtistContent = ({ ima, rap, cover, duration, year }) => (
    <div className="ArtistContent">
        <div className="ArtistContentItem">
            <div className="ArtistContentItem-image" style={{ width: '250px' }}>
                <Player playsInline
                    className='react-player'
                    poster={ima}
                    url={cover}
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