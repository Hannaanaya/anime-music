import React from 'react'
import useInitialState from '../hooks/useInitialState';

const AppContext = React.createContext();

function AppProvider(props) {
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
    } = useInitialState('TODOS_V1', []);
    const [searchValue, setSearchValue] = React.useState('');

    let searchedTodos = [];

    if (!searchValue.length >= 1) {
        searchedTodos = todos;
    } else {
        searchedTodos = todos.filter(todo => {
            const todoText = todo.text.toLowerCase();
            const searchText = searchValue.toLowerCase();
            return todoText.includes(searchText);
        });
    }

    return (
        <AppContext.Provider value={{
            loading,
            error,
            searchValue,
            setSearchValue,
            searchedTodos,
        }}>
            {props.children}
        </AppContext.Provider>
    );
}

export { AppContext, AppProvider };