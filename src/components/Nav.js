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


    const containerClass = `border-r-4 border-accent w-3/4 flex flex-col justify-between py-8`
    const navClass = `flex flex-col gap-8 justify-center items-center p-2`
    const linksClass = ` flex flex-col items-center gap-2`
    const linkClass = `fill-accent hover:fill-secondary hover:scale-125 hover:text-info transition ease-in-out`
    const aClass = `text-accent hover:text-info transition ease-in-out hover:scale-125`
    const logoClass = ``
    const eachLink = `flex flex-col gap-1 items-center hover:color-secondary`
    const h1Class = `text-xs text-accent hover:text-secondary`

    return (
        <div className={containerClass}>
            <div className={logoClass}><h1>logo</h1></div>
            {/* <animated.div style={props}><Logo /></animated.div> */}
            <nav className={navClass}>
                <Link className={eachLink} to='/'><AiOutlineHome className={linkClass} size={'2em'} /><h1 className={h1Class} >Home</h1></Link>
                <Link className={eachLink} to='/about'><BsPersonCircle className={linkClass} size={'2em'} /><h1 className={h1Class} >About</h1></Link>
                <Link className={eachLink} to='/projects'><FaCodeBranch className={linkClass} size={'2em'} /><h1 className={h1Class} >Projects</h1></Link>
                <Link className={eachLink} to='/email'><AiOutlineMail className={linkClass} size={'2em'} /><h1 className={h1Class} >Email</h1></Link>
            </nav>
            <div className={linksClass}>
                <a className={aClass} href='https://www.linkedin.com/in/yulerik-sorensen' target='_blank' rel='noreferrer'><FaLinkedin size={'1.25em'} /></a>
                <a className={aClass} href='https://www.github.com/yulerik' target='_blank' rel='noreferrer'><FaGithubSquare size={'1.25em'} /></a>
            </div>
        </div>
    )
}