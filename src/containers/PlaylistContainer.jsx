import React from 'react';
import Header from '../components/Header';
import RapList from '../components/RapList';
import RapsContent from '../components/RapsContent';
import useInitialState from '../hooks/useInitialState';
import '../styles/containers/PlaylistContainer.css';
import Search from './Search';

const API = 'http://localhost:3001/initialState'

const PlaylistContainer = () => {
    const initialState = useInitialState(API);

    return initialState.length === 0 ? 'Loading...' : (

        <section className="Playlist">
            <Header />
            <div className='Container'>
                {initialState.mylist.length > 0 &&
                    <RapList>
                        {initialState.mylist.map(item =>
                            <RapsContent key={item.id} {...item} />
                        )}
                    </RapList>
                }
            </div>

            {/* DOBLECERO */}
            <div className='Container'>
                <RapList>
                    {initialState.doblecero.map(item =>
                        <RapsContent key={item.id} {...item} />
                    )}
                </RapList>
            </div>

            {/* OMAR CÁBAN */}
            <div className='Container'>
                <RapList>
                    {initialState.omar.map(item =>
                        <RapsContent key={item.id} {...item} />
                    )}
                </RapList>
            </div>

            {/* DAVID DELGADO */}
            <div className='Container'>
                <RapList>
                    {initialState.david.map(item =>
                        <RapsContent key={item.id} {...item} />
                    )}
                </RapList>
            </div>

            {/* DESTACADOS */}
            <div className='Container'>
                <RapList>
                    {initialState.destacados.map(item =>
                        <RapsContent key={item.id} {...item} />
                    )}
                </RapList>
            </div>
        </section>
    );
};

export default PlaylistContainer;