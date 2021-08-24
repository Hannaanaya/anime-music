import React from 'react';
import logo from '../static/logo.jpg';
import Playlist from '../components/playlist/Playlist';
import PlaylistFriends from '../components/playlist/PlaylistFriends';
import Container from '../components/Container';
import Footer from '../components/Footer';

const Home = () => {
    return(
        <React.Fragment>
            <section className="home">
             <div className="home-sidebar">
              <div className="sidebar">
               <div className="logo">
                 <figure className="logo-image">
                   <img src={ logo } alt="logo" width="200px" height="60px" />
                 </figure>
               </div>
              <Playlist />
              <PlaylistFriends />
             </div>
           </div>
           <Container />
           <Footer />
          </section>
        </React.Fragment>
    );
}

export default Home;