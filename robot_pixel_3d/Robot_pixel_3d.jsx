/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.5 robot_pixel_3d.gltf --transform
Author: Johan Jiménez (https://sketchfab.com/Johan.Jimenez)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/robot-pixel-3d-cb0b290d0aa54cbb8f443f33aba1b00f
Title: Robot Pixel 3D
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/robot_pixel_3d-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_2.geometry} material={materials.palette} rotation={[-Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/robot_pixel_3d-transformed.glb')
