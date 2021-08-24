import React from 'react';
import Cero from '../static/Cero.jpg';
import './styles/footer.css';

const Footer = () => {
    return(
      <div className="home-featuring">
      <div className="featuring">
        <div className="featuring-image">
          <img src={ Cero } width="100" height="100" alt="" />
        </div>
        <div className="featuring-content">
          <p className="featuring-title">Continúa viendo</p>
          <p className="featuring-album">Mejores raperos - Covers anime</p>
        </div>
      </div>
    </div>
    );
}

export default Footer;