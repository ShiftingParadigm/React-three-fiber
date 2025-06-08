import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Bloom, EffectComposer } from '@react-three/postprocessing';
import Scene from './Scene';
import './style.css';

const App = () => {
  return (
    <>
      <Canvas flat camera={{ fov: 25, position: [0, 0, 5] }}>
        <color attach="background" args={['#000']} />
        {/* <Perf position="top-left" /> */}
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} />
        <OrbitControls />

        <Suspense fallback={null}>
          <Scene />
        </Suspense>

        <EffectComposer>
          <Bloom mipmapBlur intensity={5.0} luminanceThreshold={0.4} luminanceSmoothing={0.1} />
        </EffectComposer>
      </Canvas>

      <div className="w-full bg-black py-32 text-white text-center text-xl">
        <h1>Made by ShiftingParadigm</h1>
      </div>
    </>
  );
};

export default App;
