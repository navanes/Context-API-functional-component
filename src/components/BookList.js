import React, {useContext} from 'react';
import {ThemeContext} from "../contexts/ThemeContext";
import {BookContext} from "../contexts/BookContext";


function BookList() {
    const {isLightTheme, light, dark} = useContext(ThemeContext);
    const { books } = useContext(BookContext)
    const theme = isLightTheme ? light : dark;
    console.log(theme);
    return (
        <div className="book-list" style={{color: theme[0].font, background: theme[0].bg}}>
            <ul>
                {books.map(book => {
                    return(
                        <li style={{background: theme[0].ui}} key={book.id} >{book.title}</li>
                    )
                })}
            </ul>
        </div>
    );
}

export default BookList;