import { useState, useEffect } from 'react';

const useInitialState = (API) => {
    const [covers, setCovers] = useState({
        mylist: [],
        doblecero: [],
        omar: [],
        david: [],
        destacados: [],
        infoCero: [],
        infoOmar: [],
        infoDavid: []
    });

    useEffect(() => {
        fetch(API)
            .then(response => response.json())
            .then(data => setCovers(data));
    }, []);
    return covers;
}

export default useInitialState;