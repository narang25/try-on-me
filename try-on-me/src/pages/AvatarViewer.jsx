import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Stage } from '@react-three/drei';
import ViewerSidebar from '../components/ViewerSidebar';
import AvatarModel from '../components/AvatarModel';
import AvatarControls from '../components/AvatarControls';
import { useRef } from 'react';

export default function AvatarViewer() {
  const controlsRef = useRef();
  const canvasRef = useRef();

  const handleReset = () => {
    if (controlsRef.current) controlsRef.current.reset();
  };

  const handleFullscreen = () => {
    if (canvasRef.current?.requestFullscreen) {
      canvasRef.current.requestFullscreen();
    }
  };

  return (
    <div className="h-screen w-full relative bg-gradient-to-br from-blue-100 to-purple-200">
      <ViewerSidebar />

      <div className="h-full w-full pl-[280px] relative">
        {/* Controls overlay (DOM) */}
        <div className="absolute top-4 right-4 z-50">
          <AvatarControls onResetView={handleReset} onFullscreen={handleFullscreen} />
        </div>

        {/* Canvas */}
        <Canvas
          ref={canvasRef}
          camera={{ position: [0, 1.6, 3], fov: 45 }}
          className="w-full h-full"
        >
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <Stage environment="city" intensity={0.6} shadows>
            <AvatarModel url="/models/avatar.glb" />
          </Stage>
          <OrbitControls ref={controlsRef} enablePan enableZoom enableRotate />
          <Environment preset="sunset" />
        </Canvas>
      </div>
    </div>
  );
}
