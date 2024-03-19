import { OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { Debug, Physics, RigidBody } from '@react-three/rapier'


export default function Experience() {
    return <>
        <color args={["#000000"]} attach="background" />
        <Perf position="top-left" />

        <OrbitControls makeDefault />

        <directionalLight castShadow position={[1, 2, 3]} intensity={1.5} />
        <ambientLight intensity={0.5} />
        <Physics>
            <Debug />
            <RigidBody colliders="ball">
                <mesh castShadow position={[- 2, 2, 0]}>
                    <sphereGeometry />
                    <meshStandardMaterial color="orange" />
                </mesh>
            </RigidBody>
            <mesh castShadow position={[2, 2, 0]}>
                <boxGeometry />
                <meshStandardMaterial color="mediumpurple" />
            </mesh>
            <RigidBody type='fixed'>
                <mesh receiveShadow position-y={- 1.25}>
                    <boxGeometry args={[10, 0.5, 10]} />
                    <meshStandardMaterial color="greenyellow" />
                </mesh>
            </RigidBody>
        </Physics>

    </>
}