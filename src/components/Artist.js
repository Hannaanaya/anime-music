import React from 'react';
import '../styles/pages/ArtistPage.css';

const Artist = ({ children }) => {
    return (
        <React.Fragment>
            <div className='Artist'>
                <div className='Top-border'></div>
                {children}
                <div className='border'></div>
            </div>
        </React.Fragment>
    );
}

export default Artist;