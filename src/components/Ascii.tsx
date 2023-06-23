/* eslint-disable react/no-unknown-property */
'use client';

import { Canvas, useThree } from '@react-three/fiber';
import { AsciiRenderer, OrbitControls } from '@react-three/drei';
import type { TorusKnotGeometryProps } from '@react-three/fiber';
import type { FC } from 'react';

const Torusknot: FC = (props: TorusKnotGeometryProps) => {
  const viewport = useThree((state) => state.viewport);
  const scale = Math.min(viewport.width, viewport.height) / 5;
  return (
    // @ts-expect-error types
    <mesh scale={scale} {...props}>
      <torusKnotGeometry args={[1, 0.2, 128, 32]} />
      <meshStandardMaterial color="red" />
    </mesh>
  );
};

export const Ascii: FC = () => (
  <Canvas className="aspect-square w-full max-w-2xl">
    <color attach="background" args={['black']} />
    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
    <pointLight position={[-10, -10, -10]} />
    <Torusknot />
    <AsciiRenderer fgColor="#d4d4d8" bgColor="#18181B" />
    <OrbitControls
      makeDefault
      autoRotate
      autoRotateSpeed={2}
      enablePan={false}
      enableZoom={false}
    />
  </Canvas>
);
