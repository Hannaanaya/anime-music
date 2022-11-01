import React, { useState } from 'react';
import Search from '../containers/Search';
import user from '../static/icon.png';
import Login from '../containers/Login';
import RapList from './RapList';
import RapsContent from './RapsContent';
import useInitialState from '../hooks/useInitialState';
import '../styles/components/Header.css';

const API = 'http://localhost:3001/initialState'

function Header() {
    const initialState = useInitialState(API);
    // Estado inicial de nuestros COVERs
    const [covers, setCovers] = React.useState(initialState);

    // El estado de nuestra búsqueda
    const [searchValue, setSearchValue] = useState('');

    // Creamos una nueva variable en donde guardaremos las coincidencias con la búsqueda
    let searchedCover = [];

    //Va a determinar qué covers muestra o no en la lista de búsqueda, ya sea con mayúscula o minúscula
    if (!searchValue.length >= 1) {
        searchedCover = covers;
    } else {
        searchedCover = covers.filter(cover => {
            const coverText = cover.text.toLowerCase();
            const searchText = searchValue.toLowerCase();
            return coverText.includes(searchText);
        });
    }

    const [searchLogin, setSearchLogin] = useState(false);

    return (
        <section className='Header'>
            <div>
                <Search
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                />

            </div>

            <div className='gif_music'>
                <img src="https://i.pinimg.com/originals/0c/e9/d2/0ce9d222a4ac14ac1ea08ba70defb376.gif" />
            </div>

            <div className="primary-user">
                <div className="user">
                    <p>
                        {/* <span type="text" onClick={() => setSearchLogin(!searchLogin)} >Iniciar sesión</span> */}
                        <img src={user} alt="image-user" onClick={() => setSearchLogin(!searchLogin)} />
                    </p>
                </div>
            </div>
            {searchLogin &&
                <Login
                    searchLogin={searchLogin}
                    setSearchLogin={setSearchLogin}
                />}
        </section>
    );
}

export default Header;