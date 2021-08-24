import React from 'react';
// import './styles/headerSearch.css';

//badgesBox
const RapList = ({ children}) => {
    return(
        <React.Fragment>
            <div className="primary-list">
                <div className="primaryPlaylist">
                 <h3 className="primaryPlaylist-topic">Lo mejor de la semana</h3>
                 {/* <h2 className="primaryPlaylist-title">{ name }</h2> */}
                 { children }
                </div>
            </div>
            
        </React.Fragment>
    );
}

export default RapList;