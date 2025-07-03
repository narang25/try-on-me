import { useGLTF } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export default function AvatarModel({ url }) {
  const { scene } = useGLTF(url);
  const avatarRef = useRef();

  // Optional: Idle animation or slight rotation
  useFrame(() => {
    if (avatarRef.current) {
      avatarRef.current.rotation.y += 0.002;
    }
  });

  useEffect(() => {
    if (avatarRef.current) {
      avatarRef.current.scale.set(1.1, 1.1, 1.1);
      avatarRef.current.position.set(0, -1.2, 0);
    }
  }, []);

  return <primitive object={scene} ref={avatarRef} dispose={null} />;
}
