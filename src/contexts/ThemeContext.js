import React, {createContext, useState} from 'react';

export const ThemeContext = createContext();

function ThemeContextProvider({children}) {
    const [isLightTheme, setIsLightTheme] = useState(true)
    const [light, setLight] = useState([
        {
            font: '#555',
            ui: '#ddd',
            bg: '#eee'
        }
    ])
    const [dark, setDark] = useState([
        {
            font: '#ddd',
            ui: '#333',
            bg: '#555'
        }
    ])
    const toggleTheme = () => {
        setIsLightTheme(prevIsLightTheme => !prevIsLightTheme)
    }
    return (
        <ThemeContext.Provider value={{isLightTheme, light, dark, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeContextProvider;


//class ThemeContextProvider extends Component {
// state = {
//     isLightTheme: true,
//     light: {
//         font: '#555',
//         ui: '#ddd',
//         bg: '#eee'
//     },
//     dark: {
//         font: '#ddd',
//         ui: '#333',
//         bg: '#555'
//     }
// }
// toggleTheme = () => {
//     this.setState({isLightTheme: !this.state.isLightTheme})
// }
//     render() {
//         return (
//             <ThemeContext.Provider value={{...this.state, toggleTheme: this.toggleTheme}}>
//                 {this.props.children}
//             </ThemeContext.Provider>
//         )
//     }
// }
// export default ThemeContextProvider
