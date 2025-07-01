import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function AvatarModel({ url }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} scale={1.5} />;
}

export default function AvatarViewer() {
  const avatarUrl = "https://models.readyplayer.me/6863f929fe9030c714c539b6.glb"; // relative to /public

  return (
    <div className="h-screen w-full bg-gray-100">
      <Canvas camera={{ position: [0, 5, 3] }}>
        <ambientLight intensity={1} />
        <directionalLight position={[0, 5, 5]} />
        <Suspense fallback={null}>
          <AvatarModel url={avatarUrl} />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
}

