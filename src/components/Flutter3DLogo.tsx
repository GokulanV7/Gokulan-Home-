import React, { useRef, Suspense, useState, useMemo, useEffect } from 'react';
import { Canvas, ThreeEvent } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { useSpring, animated } from '@react-spring/three';

// Helper function to create a parallelogram shape
const createParallelogramShape = (width: number, height: number, skew: number) => {
  const shape = new THREE.Shape();
  shape.moveTo(-width / 2 - skew / 2, height / 2);
  shape.lineTo(width / 2 - skew / 2, height / 2);
  shape.lineTo(width / 2 + skew / 2, -height / 2);
  shape.lineTo(-width / 2 + skew / 2, -height / 2);
  shape.closePath();
  return shape;
};

const extrudeSettings = {
  depth: 0.1,
  bevelEnabled: true,
  bevelThickness: 0.02,
  bevelSize: 0.02,
  bevelSegments: 2,
};

interface LogoPartProps {
  name: string;
  initialColor: string | THREE.Color;
  hoverColor: string | THREE.Color;
  shape: THREE.Shape;
  position: [number, number, number];
  className?: string;
  rotation?: [number, number, number];
  onPartClick?: (name: string) => void;
}

const LogoPart = ({
  name,
  initialColor,
  hoverColor,
  shape,
  position,
  rotation = [0, 0, 0],
  onPartClick,
}: LogoPartProps) => {
  const meshRef = useRef<THREE.Mesh>(null!); // Typed useRef
  const [isClicked, setIsClicked] = useState(false);
  
  // Create individual animated values for x, y, z
  // Simple position and scale
  const scale = window.innerWidth < 768 ? 0.4 : 0.6;
  const zOffset = isClicked ? position[2] + 0.1 : position[2];

  // Convert color to THREE.Color object
  const colorValue = new THREE.Color(isClicked ? hoverColor : initialColor);

  const handleClick = (event: ThreeEvent<MouseEvent>) => { // Typed event
    event.stopPropagation();
    setIsClicked(true);
    if (onPartClick) onPartClick(name);
    console.log(`${name} part clicked!`);
  };

  const geometry = useMemo(() => new THREE.ExtrudeGeometry(shape, extrudeSettings), [shape]);

  return (
    <mesh
      ref={meshRef}
      position={[position[0], position[1], zOffset]}
      rotation={rotation}
      scale={[scale, scale, scale]}
      onClick={handleClick}
      castShadow
      receiveShadow
      geometry={geometry}
    >
      <meshStandardMaterial
        color={colorValue}
        roughness={0.5}
        metalness={0.3}
      />
    </mesh>
  );
};

function FlutterLogo3D() {
  const group = useRef<THREE.Group>(null!); // Typed useRef
  const colors = {
    blue: '#02569B',
    teal: '#13B9FD',
    lightBlue: '#0175C2',
    darkBlue: '#013447',
  };
  const brighterColors = {
    blue: '#2078C1',
    teal: '#36D0FF',
    lightBlue: '#1E93E0',
    darkBlue: '#1A5669',
  };

  const partWidth = 0.8;
  const partHeight = 0.7;
  const partSkew = 0.3;
  const ySpacing = partHeight * 0.75;
  const xOffset = partWidth * 0.4;
  const yOffset = partHeight * 0.4;

  const tealShape = useMemo(() => createParallelogramShape(partWidth, partHeight, partSkew), []);
  const lightBlueShape = useMemo(() => createParallelogramShape(partWidth, partHeight, partSkew), []);
  const blueShape = useMemo(() => createParallelogramShape(partWidth * 1.2, partHeight, partSkew), []);
  const darkBlueShape = useMemo(() => createParallelogramShape(partWidth * 0.6, partHeight, -partSkew * 0.5), []);

  const [clickCounts, setClickCounts] = useState<{ [key: string]: number }>({ teal: 0, lightBlue: 0, blue: 0, darkBlue: 0 });
  const handlePartClick = (partName: string) => {
    setClickCounts((prev) => ({ ...prev, [partName]: (prev[partName] || 0) + 1 }));
  };

  return (
    <group ref={group} rotation={[0, Math.PI * 0.1, 0]} scale={[1, 1, 1]} position={[0, 0, 0.25]} className={className}>
      {/* Teal part - top left */}
      <LogoPart
        name="teal"
        initialColor={colors.teal}
        hoverColor={brighterColors.teal}
        shape={tealShape}
        position={[-xOffset, yOffset, 0.1]}
        onPartClick={handlePartClick}
      />
      
      {/* Light blue part - center */}
      <LogoPart
        name="lightBlue"
        initialColor={colors.lightBlue}
        hoverColor={brighterColors.lightBlue}
        shape={lightBlueShape}
        position={[0, 0, 0]}
        onPartClick={handlePartClick}
      />
      
      {/* Blue part - bottom right */}
      <LogoPart
        name="blue"
        initialColor={colors.blue}
        hoverColor={brighterColors.blue}
        shape={blueShape}
        position={[xOffset, -yOffset, -0.1]}
        onPartClick={handlePartClick}
      />
      
      {/* Dark blue part - top right */}
      <LogoPart
        name="darkBlue"
        initialColor={colors.darkBlue}
        hoverColor={brighterColors.darkBlue}
        shape={darkBlueShape}
        position={[xOffset * 1.2, yOffset * 0.8, 0.05]}
        rotation={[0, 0, -Math.PI / 12]}
        onPartClick={handlePartClick}
      />
    </group>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.8} />
      <directionalLight
        position={[5, 8, 5]}
        intensity={1.2}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <directionalLight position={[-5, -3, 2]} intensity={0.5} />
      <Suspense fallback={null}>
        <Flutter3DLogo />
      </Suspense>
      <OrbitControls enableZoom={false} enablePan={true} />
    </>
  );
}

export default function Flutter3DLogoApp() {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <Canvas 
        shadows 
        camera={{ position: [0, 1, 2], fov: 45 }}
        gl={{ alpha: true }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}