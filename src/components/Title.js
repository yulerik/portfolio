import React, { useState, useRef } from 'react'
import { extend } from '@react-three/fiber'

import { Text } from '@react-three/drei'
import randomColor from 'randomcolor'
import { animated, useSpring, config } from '@react-spring/three'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
import robotoMono from '../assets/Roboto Mono_Regular.json'

extend({TextGeometry})

export default function Title(props) {
    const font = new FontLoader().parse(robotoMono)
    
    const mesh = useRef()

    const [hover, setHover] = useState(false)

    const { scale, styles } = useSpring({
        scale: hover ? 1 : .5,
        config: config.gentle
    })

    return (
        <animated.mesh ref={mesh} scale={scale} styles={styles} onPointerOver={() => setHover(true)} onPointerOut={() => setHover(false)}>
            <Text position={[0,3,0]} scale={10} color={'#1EB854'} anchorX="center" anchorY="middle" >Hi, I'm Forrest.</Text>
            <Text position={[0,2,0]} scale={10} color={'#1EB854'} anchorX="center" anchorY="middle" >Web Developer</Text>
            <textGeometry args={['Forrest', {font, size:2, height: 1}]}/>
            <meshLambertMaterial attach='material' color={'#1EB854'}/>
        </animated.mesh>
    )
}