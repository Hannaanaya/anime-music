import React from 'react';
import '../styles/containers/PlaylistContainer.css';

const RapList = ({ children }) => {
    return (
        <React.Fragment>
            <section className="RapList" >
                <h3 className="primaryPlaylist-topic">Lo mejor de la semana</h3>
                <div className="primary-list">
                    <div className='primaryPlaylist-list'>
                        {children}
                    </div>
                </div>
            </section>
        </React.Fragment>

    );
}

export default RapList;