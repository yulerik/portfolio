import React, { useContext } from 'react'
import * as ReactDOMClient from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import './index.css'

import App from './App'
import { useTheme, ThemeProvider, useThemeContext } from './context/themeContext';

const AppWrapper = () => {
    const value = useTheme()

    return (
    // <ThemeProvider value={value} >
        <BrowserRouter>
            <App />
        </BrowserRouter>
    // </ThemeProvider>
    )
}

const rootClass = `flex h-screen w-full grid grid-cols-12`

const container = document.getElementById('root')
container.className = rootClass
container.dataset.theme = 'tree'
console.log(container)
// create root
const root = ReactDOMClient.createRoot(container)
// init render, render element to the root
root.render(
    <AppWrapper />
)
// during update no need to pass container again
root.render(
    <AppWrapper />
)
