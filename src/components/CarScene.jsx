/* eslint-disable no-unused-vars */
// CarScene.jsx
import { Canvas, useThree } from '@react-three/fiber';
import { Environment, OrbitControls, useGLTF } from '@react-three/drei';
import { useRef } from 'react';

function Car() {
  // automatically pre‑loads and caches
  const { scene } = useGLTF('/models/FormulaF1.gltf');
  return <primitive object={scene} scale={0.25} />;
  
}

export default function CarScene() {

  return (
    <>
    <Canvas
      shadows
      camera={{ position: [5, 100, 10], fov: 45 }}
      style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%'}}
    >
      <hemisphereLight intensity={0.2} />
      <spotLight position={[10, 15, 10]} angle={0.3} castShadow />
      <Car />
      <Environment preset="warehouse" />
      <OrbitControls enablePan={false} />
    </Canvas></>
  );
}
