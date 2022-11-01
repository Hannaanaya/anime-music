import { useState, useEffect } from 'react';

const useInitialState = (API) => {
    const [cover, setCover] = useState({
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
            .then(data => setCover(data));
    }, []);
    return cover;
}

export default useInitialState;