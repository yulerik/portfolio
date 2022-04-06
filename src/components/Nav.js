import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'
import { useSpring, animated } from 'react-spring'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaLinkedin, FaGithubSquare, FaCodeBranch } from "react-icons/fa";
import { AiOutlineHome, AiOutlineMail } from 'react-icons/ai'
import { BsPersonCircle } from 'react-icons/bs'

export default function Nav() {
    
    // const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } })


    const containerClass = ``
    const navClass = `h-5/6 flex flex-col justify-around items-center p-2`
    const linksClass = `flex flex-col items-center gap-2`
    const linkClass = `hover:scale-125 hover:text-primary transition ease-in-out`
    const aClass = `hover:text-warning transition ease-in-out hover:scale-125`

    return (
        <div className={containerClass}>
            {/* <animated.div style={props}><Logo /></animated.div> */}
            <nav className={navClass}>
                <Link to='/'><AiOutlineHome className={linkClass} size={'2em'} /></Link>
                <Link to='/about'><BsPersonCircle className={linkClass} size={'2em'} /></Link>
                <Link to='/projects'><FaCodeBranch className={linkClass} size={'2em'} /></Link>
                <Link to='/email'><AiOutlineMail className={linkClass} size={'2em'} /></Link>
            </nav>
            <div className={linksClass}>
                <a className={aClass} href='https://www.linkedin.com/in/yulerik-sorensen' target='_blank' rel='noreferrer'><FaLinkedin size={'1.25em'} /></a>
                <a className={aClass} href='https://www.github.com/yulerik' target='_blank' rel='noreferrer'><FaGithubSquare size={'1.25em'}/></a>
            </div>
        </div>
    )
}