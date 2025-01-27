import { OrbitControls } from '@react-three/drei'
import { useControls, button,/* folder = is function to create folder inside folder*/ } from 'leva'
import { Perf } from 'r3f-perf';

export default function Experience() {

    const { perfVisible } = useControls({
        perfVisible: true
    })
    const { position, color, visible } = useControls("sphere", {
        position: {
            /*  value: -2,*/
            value: { x: -2, y: 0 },
            min: -4,
            max: 4,
            step: 0.01,
            joystick: "invertY"
        },
        color: "#ff0000",
        visible: true,
        myInterval: {
            min: 0,
            max: 10,
            value: [4, 5]
        },
        clickMe: button(() => {
            console.log('hey');
        }),

        choice: {
            options: ["a", "b", "c"]
        }
    })

    const { scale } = useControls('cube', {
        scale: {
            value: "1.5",
            step: "0.01",
            min: 0,
            max: 5
        }
    })
    return <>
        {perfVisible ? <Perf position='top-left' /> : null}
        <OrbitControls makeDefault />

        <directionalLight position={[1, 2, 3]} intensity={1.5} />
        <ambientLight intensity={0.5} />

        <mesh position={[position.x, position.y, 0]} visible={visible}>
            <sphereGeometry />
            <meshStandardMaterial color={color} />
        </mesh>

        {/* <Cube scale={2} /> */}

        <mesh position-x={2} scale={scale} >
            <boxGeometry />
            <meshStandardMaterial color="mediumpurple" />
        </mesh>

        <mesh position-y={- 1} rotation-x={- Math.PI * 0.5} scale={10}>
            <planeGeometry />
            <meshStandardMaterial color="greenyellow" />
        </mesh>

    </>
}