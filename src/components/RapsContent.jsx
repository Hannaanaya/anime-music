import React from 'react';
import ReactPlayer from 'react-player';

const RapsContent = ({ rap, cover, duration, year }) => (
    <React.Fragment>
        <div className="primaryPlaylist-list">
            <div className="primaryPlaylistItem">
                <div className="primaryPlaylistItem-image">
                    <ReactPlayer
                        className='react-player'
                        // playing
                        url={cover}
                        width='250px'
                        height='180px'
                    />
                </div>
                <h6 className="primaryPlaylistItem-title">
                    {rap}
                    <h6 className="primaryPlaylistItem-title">
                        {duration}
                    </h6>
                    <h6 className="primaryPlaylistItem-title">
                        {year}
                    </h6>
                </h6>
            </div>
        </div>
    </React.Fragment>
);

export default RapsContent;