import React from 'react';
import { AppContext } from '../context/AppContext';
import '../styles/containers/Search.css';

function Search() {
    const { searchValue, setSearchValue } = React.useContext(AppContext);

    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    };

    return (
        <React.Fragment>
            <section className='Search'>
                <div className="primary-search">
                    <form action="" className="search">
                        <input type="text"
                            placeholder="Busca tu artista o tema favorito..."
                            value={searchValue}
                            onChange={onSearchValueChange}
                        />
                    </form>
                </div>
            </section>

        </React.Fragment>
    );
}

export default Search;