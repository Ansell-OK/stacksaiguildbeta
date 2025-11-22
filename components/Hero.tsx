import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, Sphere, MeshTransmissionMaterial, Torus } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';
import { SectionId } from '../types';

const FloatingShapes = () => {
  const torusRef = useRef<THREE.Mesh>(null);
  const sphereRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (torusRef.current) {
      torusRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      torusRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
    }
    if (sphereRef.current) {
       sphereRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.2;
    }
  });

  return (
    <group>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        {/* Main Torus Ring */}
        <Torus ref={torusRef} args={[2.5, 0.2, 16, 100]} position={[0, 0, -1]} rotation={[1, 0, 0]}>
           <meshStandardMaterial 
            color="#818CF8" 
            roughness={0.1}
            metalness={0.1}
            emissive="#4F46E5"
            emissiveIntensity={0.2}
           />
        </Torus>
        
        {/* Glass Sphere Left */}
        <Sphere ref={sphereRef} args={[1.2, 32, 32]} position={[-3, 0.5, 0]}>
          <MeshTransmissionMaterial 
            backside
            samples={4}
            thickness={2}
            chromaticAberration={0.5}
            anisotropy={0.3}
            distortion={0.4}
            distortionScale={0.3}
            temporalDistortion={0.5}
            clearcoat={1}
            attenuationDistance={0.5}
            attenuationColor="#ffffff"
            color="#a5b4fc"
            bg="white"
          />
        </Sphere>

         {/* Glass Sphere Right */}
         <Sphere args={[0.8, 32, 32]} position={[3.5, -1, 1]}>
          <MeshTransmissionMaterial 
            backside
            samples={4}
            thickness={1.5}
            chromaticAberration={0.3}
            distortion={0.2}
            color="#c7d2fe"
          />
        </Sphere>
      </Float>
      <Environment preset="city" />
    </group>
  );
};

export const Hero: React.FC = () => {
  return (
    <section id={SectionId.HOME} className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-brand-bg">
      
      {/* Background Gradient */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,#EEF2FF_0%,transparent_50%)] z-0" />
      
      {/* 3D Scene */}
      <div className="absolute inset-0 z-0 opacity-80">
        <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
          <ambientLight intensity={0.8} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
          <FloatingShapes />
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <div className="mb-6 flex justify-center">
            <span className="text-2xl text-brand-dark mb-4 block animate-pulse">
              ✦
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-brand-dark mb-8 leading-[1.1]">
            Where Talent <br />
            <span className="text-brand-primary">Grows</span>
          </h1>

          <p className="text-brand-muted text-lg md:text-xl max-w-2xl mx-auto mb-10 font-normal leading-relaxed">
            Empowering the Next Generation of AI-Native Builders.
            A programmable, utility-driven bootcamp designed for creators, developers & founders.
          </p>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById(SectionId.ABOUT)?.scrollIntoView({ behavior: 'smooth'})}
            className="px-8 py-4 bg-brand-dark text-white font-medium rounded-full shadow-xl shadow-brand-dark/20 hover:bg-black transition-colors"
          >
            Start Your Journey
          </motion.button>
        </motion.div>
      </div>
      
      {/* Foreground Decor */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-brand-bg to-transparent z-10 pointer-events-none" />
    </section>
  );
};