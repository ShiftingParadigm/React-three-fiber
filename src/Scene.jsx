import React, { useRef } from 'react';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

const Scene = () => {
  const tex = useTexture('./image.png');
  const mesh = useRef();

  useFrame((state, delta) => {
    mesh.current.rotation.y += delta;
  });

  return (
    <group rotation={[0, 1.4, 0.5]}>
      <mesh ref={mesh}>
        <cylinderGeometry args={[1, 1, 1, 60, 60, true]} />
        <meshStandardMaterial
          map={tex}
          transparent
          side={THREE.DoubleSide}
          emissiveMap={tex}
          emissiveIntensity={1}
        />
      </mesh>
    </group>
  );
};

export default Scene;
