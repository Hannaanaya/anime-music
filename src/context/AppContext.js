// import React from 'react';
// import useInitialState from '../hooks/useInitialState';

// const API = 'http://localhost:3001/initialState'

// function AppProvider() {


//     let searchedCovers = [];

    //Va a determinar qué covers muestra o no en la lista de búsqueda, ya sea con mayúscula o minúscula
//     if (!searchValue.length >= 1) {
//         searchedCovers = covers;
//     } else {
//         searchedCovers = covers.filter(cover => {
//             const coverText = cover.text.toLowerCase();
//             const searchText = searchValue.toLowerCase();
//             return coverText.includes(searchText);
//         });
//     }

//     return (
//         <AppContext.Provider value={{
//             searchValue,
//             setSearchValue,
//             searchedCovers
//         }}>
//             {props.children}
//         </AppContext.Provider>
//     );
// };

// export { AppContext, AppProvider };