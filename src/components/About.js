import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Physics } from '@react-three/cannon'
import AnimatedSvg from './AnimatedSvg'

export default function About() {

    const contentClass = `h-screen col-start-2 col-end-13`
    const textClass = `p-2 text-3xl hover:color-blue-300`

    return (
        <div className={contentClass}>
            {/* <AnimatedSvg /> */}
            <div className={textClass}><h1>Hi, I'm Forrest. Web Developer</h1></div>
            <Canvas style={{position: 'fixed'}}>
                <Physics>
                    {/* <spotLight position={[10,10,10]} /> */}
                    {/* <ambientLight color={0xffffff} intensity={.2} /> */}
                    {/* <Box /> */}
                    {/* <Title /> */}
                </Physics>
            </Canvas>
        </div>
    )
}