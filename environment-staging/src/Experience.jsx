import { useFrame } from '@react-three/fiber'
import { Lightformer, Sky, ContactShadows, OrbitControls, useHelper, BakeShadows, SoftShadows, AccumulativeShadows, RandomizedLight, Environment } from '@react-three/drei'
import { useContext, useRef } from 'react'
import { Perf } from 'r3f-perf'
import *as THREE from "three"
import { useControls } from 'leva'
// softShadows({
//     frustum: 3.75,
//     size: 0.005,
//     near: 9.5,
//     samples: 17,
//     rings: 11
// })
<SoftShadows
    frustum={3.75}
    size={0.005}
    near={9.5}
    samples={17}
    rings={11}
/>
export default function Experience() {


    const cube = useRef(null)
    const directionalLight = useRef(null)
    // useHelper(directionalLight, THREE.DirectionalLightHelper, 1)
    useFrame((state, delta) => {
        const time = state.clock.elapsedTime
        cube.current.position.x = 2 + Math.sin(time)
        cube.current.rotation.y += delta * 0.2
    })
    const { color, opacity, blur } = useControls("contact shadows",
        {
            color: "#000000",
            opacity: { value: 0.4, min: 0, max: 1 },
            blur: { value: 2.8, min: 0, max: 10 }
        }
    )

    const { sunPosition } = useControls("sky", {
        sunPosition: { value: [1, 2, 3] }
    })

    const { envMapIntensity } = useControls("envMapIntensity", { envMapIntensity: { value: 1, min: 0, max: 12 } })
    return <>
        <Environment

            background
        // files={[
        //     "./environmentMaps/2/px.jpg",
        //     "./environmentMaps/2/nx.jpg",
        //     "./environmentMaps/2/py.jpg",
        //     "./environmentMaps/2/ny.jpg",
        //     "./environmentMaps/2/pz.jpg",
        //     "./environmentMaps/2/nz.jpg",
        // ]}
        // files={"./environmentMaps/the_sky_is_on_fire_2k.hdr"}
        // preset='night'
        // preset='city'
        >
            <color args={["black"]} attach="background" />
            <Lightformer position-z={-5} scale={10}
                color="red"
                intensity={1}
                form={"ring"}

            />
            {/* <mesh position-z={-5} scale={10}> */}
            {/* <planeGeometry /> */}
            {/* <meshBasicMaterial color="red" /> */}

            {/* </mesh> */}
        </Environment >


        {/* <BakeShadows /> */}
        < ContactShadows position={[0, -0.99, 0]} scale={10} resolution={512} far={5} color={color} opacity={opacity} blur={blur} frames={1} />
        <color args={["black"]} attach="background" />

        <Perf position="top-left" />

        <OrbitControls makeDefault />
        {/* <AccumulativeShadows position={[0, -0.99, 0]} color='#316d39'
            opacity={0.8}
            // frames={Infinity}
            temporal

        >
            <RandomizedLight position={[1, 2, 3]}
                amount={8}
                radius={1}
                ambient={0.5}
                intensity={1}
                bias={0.001}

            />
        </AccumulativeShadows> */}


        {/* <directionalLight ref={directionalLight} castShadow position={sunPosition} intensity={1.5} shadow-mapSize={[1024, 1024]} shadow-camera-top={4} shadow-camera-bottom={-4} shadow-camera-right={4} shadow-camera-left={-4}
            shadow-camera-near={1}
            shadow-camera-far={10}

        /> */}
        {/* <ambientLight intensity={0.5} /> */}
        {/* <Sky sunPosition={sunPosition} /> */}
        <mesh position-x={- 2} castShadow>
            <sphereGeometry />
            <meshStandardMaterial color="orange" envMapIntensity={envMapIntensity} />
        </mesh>

        <mesh ref={cube} castShadow position-x={2} scale={1.5}>
            <boxGeometry />
            <meshStandardMaterial color="mediumpurple" envMapIntensity={envMapIntensity} />
        </mesh>

        <mesh /* receiveShadow  */ position-y={- 1} rotation-x={- Math.PI * 0.5} scale={10} >
            <planeGeometry />
            <meshStandardMaterial color="greenyellow" envMapIntensity={envMapIntensity} />
        </mesh>

    </>
}