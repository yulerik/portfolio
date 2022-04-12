import React, { useContext, useState } from 'react'

export const ThemeContext = React.createContext()

export const useThemeContext = () => useContext(ThemeContext)

export const useTheme = () => {
    const [theme, setTheme] = useState({})

    return {
        theme: 'valentine'
    }
}

export const ThemeProvider = (props) => {
    const value = useTheme()
    
    return (
        <ThemeContext.Provider value={value} >
            <div className={`absolute top-0 right-0 m-2 h-screen`}>
                <button className={`btn`}>theme context</button>
            </div>
            {props.children}
        </ThemeContext.Provider>
    )
}