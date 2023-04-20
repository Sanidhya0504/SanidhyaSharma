/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 deskchair.gltf --transform
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/deskchair-transform.glb");
  return (
    <group {...props} dispose={null}>
      <group position={[-1.91, 0, 3.99]} rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.masa_Cylinder.geometry}
          material={materials.ayak}
        />
        <mesh
          geometry={nodes.masa_Cylinder_1.geometry}
          material={materials.masa}
        />
      </group>
      <group position={[-1.91, 0, 3.99]} rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.monitör_Cube001.geometry}
          material={materials.klavye}
        />
        <mesh
          geometry={nodes.monitör_Cube001_1.geometry}
          material={materials.ekran}
        />
      </group>
      <group position={[-1.91, 0, 3.99]} rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.kitap_1_Cube003.geometry}
          material={materials.kitap1}
        />
        <mesh
          geometry={nodes.kitap_1_Cube003_1.geometry}
          material={materials["kitap 2"]}
        />
        <mesh
          geometry={nodes.kitap_1_Cube003_2.geometry}
          material={materials["sayfa.001"]}
        />
      </group>
      <mesh
        geometry={nodes.mouse.geometry}
        material={materials.mouse}
        position={[1.86, 2.87, -0.36]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.87}
      />
      <group
        position={[0.19, 2.86, -0.49]}
        rotation={[0.53, 0.04, -0.02]}
        scale={0.09}
      >
        <mesh geometry={nodes.Cube002.geometry} material={materials.klavye} />
        <mesh
          geometry={nodes.Cube002_1.geometry}
          material={materials["klavye tuş"]}
        />
        <mesh
          geometry={nodes.Cube002_2.geometry}
          material={materials["klavye ışık1"]}
        />
        <mesh
          geometry={nodes.Cube002_3.geometry}
          material={materials["klavye ışık 2"]}
        />
        <mesh
          geometry={nodes.Cube002_4.geometry}
          material={materials["klavye ışık 3"]}
        />
      </group>
      <group
        position={[0.17, 1.91, 1.9]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[1.14, 1, 1]}
      >
        <mesh
          geometry={nodes.sandalye_Cylinder001.geometry}
          material={materials.ayak}
        />
        <mesh
          geometry={nodes.sandalye_Cylinder001_1.geometry}
          material={materials.masa}
        />
        <mesh
          geometry={nodes.sandalye_Cylinder001_2.geometry}
          material={materials.masa}
        />
      </group>
      <mesh
        geometry={nodes.mousepad.geometry}
        material={materials.mousepad}
        position={[1.85, 2.77, -0.35]}
        scale={[0.51, 0.37, 0.39]}
      />
      <mesh
        geometry={nodes.Plane.geometry}
        material={materials.sahne}
        position={[1.19, 0.09, 0]}
        scale={9.24}
      />
    </group>
  );
}

useGLTF.preload("/deskchair-transformed.glb");
