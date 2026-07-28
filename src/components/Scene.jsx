import { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Sparkles, Float, Icosahedron } from '@react-three/drei';

export default function Scene() {
  const groupRef = useRef();
  const { mouse } = useThree();

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    
    // Rotate the entire group slowly
    groupRef.current.rotation.y += delta * 0.05;
    groupRef.current.rotation.x += delta * 0.03;

    // Smooth parallax based on mouse
    const targetX = mouse.x * 0.5;
    const targetY = mouse.y * 0.5;
    
    groupRef.current.position.x += (targetX - groupRef.current.position.x) * 0.05;
    groupRef.current.position.y += (targetY - groupRef.current.position.y) * 0.05;
  });

  return (
    <group ref={groupRef}>
      {/* Central Node Graph Representation */}
      <Float speed={2} rotationIntensity={1} floatIntensity={1}>
        <Icosahedron args={[2, 1]}>
          <meshBasicMaterial 
            color="#00f0ff" 
            wireframe 
            transparent
            opacity={0.3}
          />
        </Icosahedron>
        {/* Inner solid core */}
        <Icosahedron args={[1.2, 0]}>
          <meshBasicMaterial color="#050505" />
        </Icosahedron>
      </Float>

      {/* Highly Optimized Particle Systems via Drei */}
      <Sparkles 
        count={400} 
        scale={10} 
        size={1.5} 
        speed={0.3} 
        color="#00f0ff" 
        opacity={0.8}
      />
      <Sparkles 
        count={300} 
        scale={12} 
        size={2.5} 
        speed={0.2} 
        color="#4a00ff" 
        opacity={0.6}
      />
    </group>
  );
}
