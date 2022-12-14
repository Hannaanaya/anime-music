import React from 'react';
import { Player } from 'video-react';
import "../../node_modules/video-react/dist/video-react.css";

export default ({ ima, rap, cover, duration, year }) => {
    return (
        <div className="primaryPlaylist-list">
            <div className="primaryPlaylistItem">
                <div className="primaryPlaylistItem-image" style={{ width: '250px' }}>
                    <Player playsInline
                        className='react-player'
                        poster={ima}
                        url={cover}
                    />
                </div>

                <div>
                    <h6 className="primaryPlaylistItem-title">
                        {rap}
                    </h6>
                    <h6 className="primaryPlaylistItem-title">
                        {duration}
                    </h6>
                    <h6 className="primaryPlaylistItem-title">
                        {year}
                    </h6>
                </div>
            </div>
        </div>
    );
}