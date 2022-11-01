import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Home from './pages/Home';
import Cero from './pages/Cero';
import Omar from './pages/Omar';
import David from './pages/David';
import NotFound from './pages/NotFound';
import './App.css';
import './global.css';

const App = () => {
    return (
        <AppProvider>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/cero" element={<Cero />} />
                    <Route exact path="/omar" element={<Omar />} />
                    <Route exact path="/david" element={<David />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </AppProvider>
    );
}

export default App;