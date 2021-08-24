import React from 'react'
// import './styles/headerSearch.css';
//badge
const RapsContent = ({ rap, ima }) => (
    <React.Fragment>
        <div className="primaryPlaylist-list">
        <div className="primaryPlaylistItem">
            <div className="primaryPlaylistItem-image">
                <img src={ima} alt="" />
            </div>
            <h4 className="primaryPlaylistItem-title">
                {rap}
            </h4>
        </div>
    </div>
    </React.Fragment>
);

export default RapsContent;