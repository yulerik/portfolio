import React from 'react'
import { Route, Routes } from 'react-router-dom'    

import Home from './components/Home'
import About from './components/About'
import Email from './components/Email'
import Layout from './components/Layout'
import Projects from './components/Projects'


export default function App() {

    return (
        <>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/projects' element={<Projects />} />
                    <Route path='/email' element={<Email />} />
                </Route>
            </Routes>
        </>
    )
}