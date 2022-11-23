import React from 'react';
import { Player } from 'video-react';
import "../../node_modules/video-react/dist/video-react.css";

const RapsContent = ({ rap, cover, duration, year }) => (
    <div className="primaryPlaylist-list">
        <div className="primaryPlaylistItem">
            <div className="primaryPlaylistItem-image">
                <Player playsInline
                    className='react-player'
                    src={cover}
                />
            </div>
            <div className="">
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

export default RapsContent;