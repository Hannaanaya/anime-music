import React from 'react';
import { useState } from 'react';
import Search from '../containers/Search';
import user from '../static/icon.png';
import Login from '../containers/Login';
import '../styles/components/Header.css';

const Header = () => {
    //Estado de Login
    const [userLogin, setUserLogin] = useState(false);

    return (
        <section className='Header'>
            <Search />
            <div className='gif_music'>
                <img src="https://i.pinimg.com/originals/0c/e9/d2/0ce9d222a4ac14ac1ea08ba70defb376.gif" />
            </div>

            <div className="primary-user">
                <div className="user">
                    <p>
                        {/* <span type="text" onClick={() => setSearchLogin(!searchLogin)} >Iniciar sesión</span> */}
                        <img src={user} alt="image-user" onClick={() => setUserLogin(!userLogin)} />
                    </p>
                </div>
            </div>

            {userLogin &&
                <Login
                    userLogin={userLogin}
                    setUserLogin={setUserLogin}
                />}
        </section>
    );
}

export default Header;