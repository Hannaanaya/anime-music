import React from 'react';
// import HeaderPages from '../components/HeaderPages';
import RapList from '../components/RapList';
import RapsContent from '../components/RapsContent';
import Artist from '../components/Artist';
import ArtistInfo from '../components/ArtistInfo';
import ArtistContent from '../components/ArtistContent';
import useInitialState from '../hooks/useInitialState';
import '../styles/pages/ArtistPage.css';

const API = 'http://localhost:3001/initialState'

const Cero = () => {
    const initialState = useInitialState(API);

    return initialState.length === 0 ? 'Loading...' : (
        <section className="Cero">

            <div>
                {initialState.mylist.length > 0 &&
                    <RapList>
                        {initialState.mylist.map(item =>
                            <RapsContent key={item.id} {...item} />
                        )}
                    </RapList>
                }
            </div>

            {/* <HeaderPages /> */}
            <div>
                <Artist>
                    {initialState.infoCero.map(item =>
                        <ArtistInfo key={item.id} {...item} />
                    )}
                </Artist>
            </div>

            <div>
                {initialState.doblecero.map(item =>
                    <ArtistContent key={item.id} {...item} />
                )}
            </div>
        </section>
    );
}

export default Cero;