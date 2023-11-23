import React, { Suspense, useEffect, useRef, useState } from "react";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, PerspectiveCamera, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";
import useMousePosition from "../../hooks/useMousePosition";
import useMapRange from "../../hooks/useMapRange";

const Heads = () => {
  const { nodes } = useGLTF("./monieco/monieco.gltf");

  const ref = useRef();

  const mousePos = useMousePosition();

  const [windowSize, setWindowSize] = useState({
    width: null,
    height: null,
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
    const x = useMapRange(mousePos.x, 0, windowSize.width, 2, -2);
    const y = useMapRange(mousePos.y, 0, windowSize.height, -0.7, 3);

    entered ? ref.current.lookAt(x, y, -2) : ref.current.lookAt(0.4, 0.2, -2);
  });

  return (
    <Float speed={6} rotationIntensity={1} floatIntensity={1}>
      <group ref={ref} scale={3} rotation={[0, 0, 0]} position={[0, 0, 0]}>
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
  const camConfig = { aspect: 1, fov: 25, far: 500, position: [0, 1, 20] };

  return (
    <Canvas shadows gl={{ preserveDrawingBuffer: true }}>
      <PerspectiveCamera makeDefault {...camConfig}>
        <hemisphereLight
          color={"0xffffff"}
          groundColor={"0x404040"}
          intensity={0.3}
        />

        <rectAreaLight
          position={[-22, -0.4, 0]}
          intensity={1}
          width={20}
          height={20}
        />

        <rectAreaLight
          position={[0, -0.4, 0]}
          intensity={1.5}
          width={20}
          height={20}
        />

      </PerspectiveCamera>

      <Suspense fallback={<CanvasLoader />}>
        <Heads />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default HeadsCanvas;
