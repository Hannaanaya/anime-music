import React, { useContext, useState } from 'react';
import AppContext from '../context/AppContext';
import Login from '../containers/Login';
import user from '../static/masked.jpg';
import './styles/search.css';

const Search = () => {

    const { state } = useContext(AppContext);
    const [searchLogin, setSearchLogin] = useState(false);

    return (
        <React.Fragment>
            <section className='Search'>
                <div className="primary-search">
                    <form action="" className="search">
                        <input type="text" placeholder="Busca tu artista o tema favorito..." />
                    </form>
                </div>
                <img src="https://i.pinimg.com/originals/0c/e9/d2/0ce9d222a4ac14ac1ea08ba70defb376.gif" alt="git musica" width='800px' height='100px' />
                <div className="primary-user">
                    <div className="user">
                        <p>
                            <span type="text" onClick={() => setSearchLogin(!searchLogin)} >Iniciar sesión</span>
                            <img src={user} alt="image-user" />
                        </p>
                    </div>
                </div>
                {searchLogin &&
                    <Login
                        searchLogin={searchLogin}
                        setSearchLogin={setSearchLogin}
                    />}
            </section>

        </React.Fragment>
    );
}

export default Search;