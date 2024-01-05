import React from 'react';
import './TodoSearch.css';

function TodoSearch({
    searchValue,
    setSearchValue,
}) {
    return ( <
        input className = 'InputSearch'
        placeholder = "Que tarea estás buscando?"
        value = { searchValue }
        onChange = {
            (event) => {
                setSearchValue(event.target.value);
            }
        }
        / >
    );

}

export { TodoSearch };