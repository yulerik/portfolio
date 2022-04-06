import React from 'react'
import * as ReactDOMClient from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import './index.css'

import App from './App'

const rootClass = `flex h-screen w-full grid grid-cols-12`

const container = document.getElementById('root')
container.className = rootClass
// create root
const root = ReactDOMClient.createRoot(container)
// init render, render element to the root
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)
// during update no need to pass container again
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)
