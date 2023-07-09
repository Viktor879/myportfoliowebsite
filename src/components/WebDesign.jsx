import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useState, useEffect } from "react";
import Macbook_pro_2021 from "./Macbook_pro_2021";
import styled, { keyframes } from "styled-components";

const fadeInAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Desc = styled.div`
  width: 400px;
  height: 30px;
  padding: 20px;
  font-size: 30px;
  font-weight: bold;
  border-radius: 10px;
  position: absolute;
  top: 100px;
  right: 0px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  animation: ${fadeInAnimation} 1s ease-in; /* Apply fade-in animation */
  color: transparent;
  -webkit-text-stroke: 1px white;

  @media only screen and (max-width: 768px) {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
`;

const WebDesign = () => {
  const [isDescVisible, setIsDescVisible] = useState(false);

  useEffect(() => {
    // Delay the appearance of the <Desc> component
    const timer = setTimeout(() => {
      setIsDescVisible(true);
    }, 1000);

    // Clear the timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Canvas>
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.6}>
            <Macbook_pro_2021 scale={[0.1, 0.1, 0.1]} /> {/* Adjust the scale here */}
          </Stage>
          <OrbitControls enableZoom={false} autoRotate />
        </Suspense>
      </Canvas>
      {isDescVisible && (
        <Desc>
          Crafting Digital Experiences
        </Desc>
      )}
    </>
  );
};

export default WebDesign;

