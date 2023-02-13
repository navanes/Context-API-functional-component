import React, {useContext} from 'react';
import {ThemeContext} from "../contexts/ThemeContext";
import {AuthContext} from "../contexts/AuthContext";

function ThemeToggle() {
    const {isAuthenticated} = useContext(AuthContext)
    const {toggleTheme} = useContext(ThemeContext)
    return (
        <button disabled={!isAuthenticated} onClick={toggleTheme}>Toggle Theme</button>
    );
}

export default ThemeToggle;