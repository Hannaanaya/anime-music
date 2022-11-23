import React from 'react';
import { useEffect, useState } from 'react';
import axios from "axios";
import '../styles/containers/Search.css';
// import useInitialState from '../hooks/useInitialState';

// const API = 'http://localhost:3001/initialState'

const Search = () => {
    // const [users, setUsers] = useInitialState(API);
    const [users, setUsers] = useState([]);
    const [listSearch, setListSearch] = useState([]);
    const [search, setSearch] = useState("");

    const peticionGet = async () => {
        await axios.get("http://localhost:3001/initialState")
            .then(response => {
                setUsers(response.data);
                setListSearch(response.data);
            }).catch(error => {
                console.log(error);
            })
    }

    const handleChange = e => {
        setSearch(e.target.value);
        filtrar(e.target.value);
    }

    const filtrar = (searchedValue) => {
        var searchedResults = listSearch.filter((cover) => {
            if (cover.mylist.toString().toLowerCase().includes(searchedValue.toLowerCase())
                // || cover.mylist.id.toString().toLowerCase().includes(searchedValue.toLowerCase())
            ) {
                return cover;
            }
        });
        setUsers(searchedResults);
    }

    useEffect(() => {
        peticionGet();
    }, [])

    return (
        <div className='Search'>
            <div className="primary-search">
                <form action="" className="search">
                    <input
                        type="text"
                        value={search}
                        onChange={handleChange}
                        placeholder="Busca tu artista o tema favorito..."
                    />
                </form>

                <div className="table-responsive">
                    <table className="table table-sm table-bordered">
                        <ul>
                            {users &&
                                users.map((user) => (
                                    <tr key={user.id} {...user} >
                                        <li>{user.id}</li>
                                        <li>{user.name}</li>
                                        <li>{user.rap}</li>
                                        <li>{user.ima}</li>
                                    </tr>
                                ))}
                        </ul>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Search;