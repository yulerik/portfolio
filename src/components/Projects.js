import React from 'react'
import HoverVideoPlayer from 'react-hover-video-player'

export default function Projects() {

    const contentClass = `h-screen col-start-2 col-end-13`

    return (
        <div className={contentClass} >
            <h1>Projects</h1>
            <HoverVideoPlayer videoSrc='https://www.youtube.com/watch?v=3P0JqvJ4HSM' />  
        </div>
    )
}