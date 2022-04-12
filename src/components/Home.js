import React, { useId } from 'react'
import { Canvas } from '@react-three/fiber'
import { Physics } from '@react-three/cannon'

import Title from './Title'
import Box from './Box'
import { Stars } from '@react-three/drei'

export default function Home() {
    const idGen = () => {
        let x = 0 
        return () => x++
    }
    const newId = idGen()

    const divClass = `ml-2 mt-10 flex flex-col gap-10 absolute`
    const contentClass = `h-screen col-start-2 col-end-13`
    const textClass = `p-1 text-5xl hover:animate-wiggle hover:text-accent hover:cursor-pointer`
    
    const lineClass = `flex text-primary`
    const lineOne = `Hello,`
    const lineTwo = `I'm Forrest.`
    const lineThree = `Web Developer.`

    return (
        <div className={contentClass}>
            <Canvas style={{position: 'fixed'}}>
                <Stars />
                <Physics>
                    <spotLight position={[10,10,10]} />
                    <ambientLight color={0xffffff} intensity={.2} />
                    <Box />
                    {/* <Title /> */}
                </Physics>
            </Canvas>
            <div className={divClass}>
                <div className={`${lineClass}`}>
                    {lineOne.split('').map(each => <h1 key={newId()} className={textClass} >{each}</h1> )}
                </div>
                <div className={`${lineClass}`}>
                    {lineTwo.split('').map(each => <h1 key={newId()} className={textClass} >{each}</h1> )}
                </div>
                <div className={`${lineClass}`}>
                    {lineThree.split('').map(each => <h1 key={newId()} className={textClass} >{each}</h1> )}
                </div>
            </div>
        </div>
    )
}