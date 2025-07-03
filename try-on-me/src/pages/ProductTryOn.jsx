import { useState } from 'react';
import LinkInputForm from '../components/LinkInputForm';
import ProductPreviewCard from '../components/ProductPreviewCard';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Stage } from '@react-three/drei';
import AvatarModel from '../components/AvatarModel';

export default function ProductTryOn() {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState(null);

  const handleFetchProduct = (link) => {
    setLoading(true);

    // TEMP MOCK PARSER (replace with real fetch later)
    setTimeout(() => {
      setProduct({
        title: 'Basic Slim Fit Tee - White',
        brand: 'Time and Tru',
        price: '9.96',
        url: link,
        image: 'https://i5.walmartimages.com/asr/ea657a84-7ee9-49db-a9de-4aa0c62293fa.30a4bfc13425277744ff89fa0a3e44d7.jpeg',
      });
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-blue-100 p-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">

        {/* Left Panel: Input + Product Preview */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-800">
            👕 Try On Clothing Instantly
          </h2>
          <p className="text-gray-600 text-sm">
            Paste a Walmart clothing product link to preview and see it on your avatar.
          </p>

          <LinkInputForm onFetchProduct={handleFetchProduct} />
          <ProductPreviewCard product={product} loading={loading} />
        </div>

        {/* Right Panel: Avatar Viewer */}
        <div className="rounded-xl overflow-hidden border border-blue-200 shadow-xl h-[500px] bg-white/70 backdrop-blur">
          <Canvas camera={{ position: [0, 1.6, 3], fov: 45 }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <Stage environment="city" intensity={0.6} shadows>
              <AvatarModel url="/models/avatar.glb" />
              {/* Later: Inject product clothing model here */}
            </Stage>
            <OrbitControls enablePan enableZoom enableRotate />
            <Environment preset="sunset" />
          </Canvas>
        </div>
      </div>
    </div>
  );
}
