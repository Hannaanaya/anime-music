import React from 'react';

const VideoItem = (rap, ima) => {
    // const video = props.video;
    return (
        <li className="primaryPlaylist-list">
            <div className="primaryPlaylistItem">
                <div className="primaryPlaylistItem-image">
                    <img className='media-object' src={ima} />
                </div>
                <h6 className="primaryPlaylistItem-title">
                    {rap}
                </h6>
            </div>
        </li>
    );
};

export default VideoItem;