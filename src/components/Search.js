import React from 'react';
import user from '../static/masked.jpg';
// import './styles/headerSearch.css';

const Search = () => {
    return (
        <React.Fragment>
            <div className="primary-search">
                 <form action="" className="search">
                  <input type="text" placeholder="Buscar un artista o tema favorito"/>
                 </form>
               </div>
               <div className="primary-user">
                 <div className="user">
                 <p>
                  <img src={ user } alt=""/>
                  <span>BlondMasked</span>
                 </p>
                </div>
               </div>
        </React.Fragment>
    );
}

export default Search;