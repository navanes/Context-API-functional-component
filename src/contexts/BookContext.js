import React, {createContext, useState} from 'react';

export const BookContext = createContext();

function BookContextProvider({children}) {
    const [books, setBooks] = useState([
        {title: 'The way of kings', id: 1},
        {title: 'Name of the wind', id: 2},
        {title: 'The final empire', id: 3},
        {title: 'Lord of the rings', id: 4},
        {title: 'Game of thrones', id: 5}
    ])
    return (
        <BookContext.Provider value={{books}}>
            {children}
        </BookContext.Provider>
    );
}

export default BookContextProvider;