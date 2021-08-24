import React from 'react';
import Search from './Search';
import RapList from './RapList';
import RapsContent from './RapsContent';
import useInitialState from '../hooks/useInitialState';
// import './styles/headerSearch.css';

const API = 'http://localhost:3001/initialState'

const Container = () => {
    const initialState = useInitialState(API);
        return initialState.length === 0 ? 'Loading...' : (
            <div className="home-primary">
                <Search />

               {initialState.mylist.length > 0 &&
               <RapList>
                   {initialState.mylist.map(item =>
                    <RapsContent key={item.id} {...item} />
                    )}
               </RapList>
               }

               <RapList>
               <h2 className="primaryPlaylist-title">Doblecero</h2>
                   {initialState.doblecero.map(item =>
                    <RapsContent key={item.id} {...item} />
                    )}
               </RapList>

               {/* <RapList>
               <h2 className="primaryPlaylist-title">Omar Cában</h2>
                   {initialState.omar.map(item =>
                    <RapsContent key={item.id} {...item} />
                    )}
               </RapList> */}

               {/* <RapList>
               <h2 className="primaryPlaylist-title">David Delgado</h2>
                   {initialState.david.map(item =>
                    <RapsContent key={item.id} {...item} />
                    )}
               </RapList> */}

               {/* <RapList>
               <h2 className="primaryPlaylist-title">Destacados</h2>
                   {initialState.destacados.map(item =>
                    <RapsContent key={item.id} {...item} />
                    )}
               </RapList> */}
            </div>
        );
}

export default Container;