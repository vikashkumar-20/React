import React, { createContext, useContext, useState } from 'react'


export const ThemeLight = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('dark')

    const handleToggleButton = () => {
        return setTheme((prevTheme) => (
            prevTheme === 'dark' ? 'light' : 'dark'
        ))
    }

    return <ThemeLight.Provider value={{ theme, handleToggleButton }}>
        {children}
    </ThemeLight.Provider>

}


const Theme = () => {

    const { theme, handleToggleButton } = useContext(ThemeLight);

    return (
        <div style={{
            backgroundColor: theme === 'dark' ? 'black' : 'white',
            color: theme === 'dark' ? 'white' : 'black',
            padding: '20px'
        }}>
            <div>
                <h1>Dark Light Mode Website</h1>
                <p>Hello, This is Vikash</p>
                <button onClick={handleToggleButton}>{theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}</button>
            </div>
        </div>
    )
}

export default Theme