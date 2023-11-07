import React, { Suspense, useEffect, useRef, useState } from "react";

import * as THREE from "three";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";
import useMediaQuery from "../../hooks/useMediaQuery";
import useMousePosition from "../../hooks/useMousePosition";
import useMapRange from "../../hooks/useMapRange";

const Heads = ({ isMobile }) => {
  const { nodes } = useGLTF("./monieco/monieco.gltf");

  const ref = useRef();

  const mousePos = useMousePosition();

  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const register = (e) => (!entered ? setEntered(true) : null);

    window.addEventListener("mousemove", register);
    return () => window.removeEventListener("mousemove", register);
  }, []);

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useFrame(() => {
    const x = isMobile
      ? useMapRange(mousePos.x, 0, windowSize.width, -2, 2)
      : useMapRange(mousePos.x, 0, windowSize.width, -4, 2.5);
    const y = isMobile
      ? useMapRange(mousePos.y, 0, windowSize.height, -1.5, 3)
      : useMapRange(mousePos.y, 0, windowSize.height, -2, 2);

    entered ? ref.current.lookAt(x, y, 2) : ref.current.lookAt(-0.4, -0.2, 2);
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={3}>
      <group
        ref={ref}
        scale={isMobile ? 3 : 2}
        rotation={[0, 0, 0]}
        position={[0, 0, 0]}
      >
        <mesh geometry={nodes.Cube001.geometry}>
          <meshStandardMaterial
            color="#C7A58C"
            bumpScale={0.05}
            roughness={0.4}
          />
        </mesh>
        <mesh geometry={nodes.Cube001_1.geometry}>
          <meshStandardMaterial
            color="#333333"
            bumpScale={0.05}
            roughness={0.4}
          />
        </mesh>
        <mesh geometry={nodes.Cube001_2.geometry}>
          <meshStandardMaterial
            color="#333333"
            bumpScale={0.05}
            roughness={0.4}
          />
        </mesh>
      </group>
    </Float>
  );
};

const HeadsCanvas = () => {
  const isMobile = useMediaQuery("(max-width:1024px)");

  const light = new THREE.HemisphereLight(0xffffff, 0x404040, 0.3);
  const rectLight1 = new THREE.RectAreaLight(0xffffff, 4, 20, 20);
  const rectLight2 = new THREE.RectAreaLight(0xffffff, 10, 20, 20);
  const rectLight3 = new THREE.RectAreaLight(0xffffff, 10, 20, 20);

  return (
    <Canvas
      onCreated={({ camera, scene }) => {
        rectLight1.position.set(-22, -0.4, 0);
        rectLight1.lookAt(0, 0, 0);

        rectLight2.position.set(0, -0.4, 0);
        rectLight2.lookAt(0, 0, 0);

        rectLight3.position.set(-2, -4, -40);
        rectLight3.lookAt(0, 0, 0);

        camera.fov = 25;
        camera.far = 500;
        camera.position.set(0, 0, -20);
        camera.lookAt(0, 0, 0);

        camera.add(light);
        camera.add(rectLight1);
        camera.add(rectLight2);
        camera.add(rectLight3);
        scene.add(camera);
      }}
      shadows
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <Heads isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default HeadsCanvas;
