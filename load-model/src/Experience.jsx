import { OrbitControls } from '@react-three/drei'
import { ReactThreeFiber } from '@react-three/fiber'
import { Perf } from 'r3f-perf'

import Model from './Model'
import { Suspense } from 'react'
import PlaceHolder from './PlaceHolder'
import Hamburger from './Hamburger'
import Fox from './Fox'
export default function Experience() {

    return <>

        <Perf position="top-left" />

        <OrbitControls makeDefault />

        <directionalLight castShadow position={[1, 2, 3]} intensity={1.5} shadow-normalBias={0.05} />
        <ambientLight intensity={0.5} />

        {/* <mesh castShadow position-x={- 2}>
            <sphereGeometry />
            <meshStandardMaterial color="orange" />
        </mesh>

        <mesh castShadow position-x={2} scale={1.5}>
            <boxGeometry />
            <meshStandardMaterial color="mediumpurple" />
        </mesh> */}

        <mesh receiveShadow position-y={- 1} rotation-x={- Math.PI * 0.5} scale={10} >
            <planeGeometry />
            <meshStandardMaterial color="greenyellow" />
        </mesh>
        <Suspense
            fallback={<PlaceHolder />}
        >
            {/* <Model /> */}
            <Hamburger scale={0.35} />
        </Suspense>
        <Fox />
    </>
}