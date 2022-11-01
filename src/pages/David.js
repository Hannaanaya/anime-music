import React from 'react'
import RapList from '../components/RapList';
import RapsContent from '../components/RapsContent';
import Artist from '../components/Artist';
import ArtistInfo from '../components/ArtistInfo';
import useInitialState from '../hooks/useInitialState';
import ArtistContent from '../components/ArtistContent';
import '../styles/pages/ArtistPage.css';

const API = 'http://localhost:3001/initialState'

const David = () => {
    const initialState = useInitialState(API);

    return initialState.length === 0 ? 'Loading...' : (
        <section className="Omar">
            <div>
                {initialState.mylist.length > 0 &&
                    <RapList>
                        {initialState.mylist.map(item =>
                            <RapsContent key={item.id} {...item} />
                        )}
                    </RapList>
                }
            </div>
            {/* HeaderPage */}
            <div>
                <Artist>
                    {initialState.infoDavid.map(item =>
                        <ArtistInfo key={item.id} {...item} />
                    )}
                </Artist>
            </div>

            <div className='Container_videos'>
                {initialState.david.map(item =>
                    <ArtistContent key={item.id} {...item} />
                )}
            </div>
        </section>
    );
}

export default David;