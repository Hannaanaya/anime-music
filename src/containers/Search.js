import React from 'react';
import { useEffect, useState } from 'react';
import axios from "axios";
import '../styles/containers/Search.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

// const API = 'http://localhost:3001/initialState'

const Search = () => {
    const [users, setUsers] = useState([]);
    const [listSearch, setListSearch] = useState([]);
    const [search, setSearch] = useState("");

    const peticionGet = async () => {
        await axios.get('http://localhost:3001/initialState')
            .then(response => {
                setUsers(response.data);
                setListSearch(response.data);
                // console.log(response.data);
            }).catch(error => {
                console.log(error);
            })
    }

    const handleChange = e => {
        // console.log(e.target.value);
        setSearch(e.target.value);
        filtrar(e.target.value);
    }

    const filtrar = (searchedValue) => {
        var searchedResults = listSearch.filter((elemento) => {
            if (elemento.rap.toString().toLowerCase().includes(searchedValue.toLowerCase())
                || elemento.name.toString().toLowerCase().includes(searchedValue.toLowerCase())
            ) {
                return elemento;
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
                <input
                    type="text"
                    value={search}
                    onChange={handleChange}
                    placeholder="Busca tu artista o tema favorito..."
                />
                <button className='btn btn-success'>
                    <FontAwesomeIcon icon={faSearch} />
                </button>

                <table>
                    <tbody>
                        {users.mylist > 0 &&
                            users.map((user) => (
                                <tr key={user.id} {...user} >
                                    <tr>{user.id}</tr>
                                    <tr>{user.cover}</tr>
                                    <tr>{user.name}</tr>
                                    <tr>{user.rap}</tr>
                                    <tr>{user.ima}</tr>
                                </tr>
                            ))}

                        {/* {users &&
                            users.doblecero.lenght.map((user) => (
                                <tr key={user.id} {...user} >
                                    <tr>{user.id}</tr>
                                    <tr>{user.cover}</tr>
                                    <tr>{user.name}</tr>
                                    <tr>{user.rap}</tr>
                                    <tr>{user.ima}</tr>
                                </tr>
                            ))} */}
                    </tbody>
                </table>

            </div>
        </div>
    );
}

export default Search;