/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.5 robotic_hand.gltf --transform
Author: Jackal04 (https://sketchfab.com/Jackal04)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/robotic-hand-a1a352baccb243009687ad22a3e4364a
Title: Robotic Hand
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/robotic_hand-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.pSphere2_Hand_0.geometry} material={materials.Hand} scale={0.01} />
      <mesh geometry={nodes.polySurface1_Thumb_0.geometry} material={materials.Thumb} scale={0.01} />
      <mesh geometry={nodes.polySurface33_covers_0.geometry} material={materials.covers} scale={0.01} />
      <mesh geometry={nodes.pCube19_Index_0.geometry} material={materials.Index} scale={0.01} />
      <mesh geometry={nodes.pCube21_Middle_0.geometry} material={materials.Middle} scale={0.01} />
      <mesh geometry={nodes.pCube22_Ring_0.geometry} material={materials.Ring} scale={0.01} />
      <mesh geometry={nodes.pCube24_Pinky_0.geometry} material={materials.Pinky} scale={0.01} />
      <mesh geometry={nodes.pPipe2_lambert1_0.geometry} material={materials.lambert1} position={[0, 0, 0.001]} rotation={[0, 0.124, 0]} scale={0.01} />
    </group>
  )
}

useGLTF.preload('/robotic_hand-transformed.glb')
