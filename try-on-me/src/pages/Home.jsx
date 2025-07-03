// src/pages/Home.jsx
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import UploadArea from '../components/UploadArea';
import PhotoPreviews from '../components/PhotoPreviews';
import GenerateButton from '../components/GenerateButton';
import ReferenceTips from '../components/ReferenceTips';
import HeroHeader from '../components/HeroHeader';
import BackgroundFX from '../components/BackgroundFX';

export default function Home() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef();
  const navigate = useNavigate(); // 🔁 Enable navigation

  const handlePhotoUpload = (e) => {
    const files = Array.from(e.target.files);
    setPhotos((prev) => [...prev, ...files].slice(0, 5));
  };

  const handleGenerateModel = () => {
    if (photos.length < 4) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      // 🚀 Navigate to viewer page
      navigate('/viewer');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-200 via-blue-100 to-pink-100 relative overflow-hidden">
      <BackgroundFX />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        <div className="md:col-span-2 glass p-10 rounded-2xl shadow-xl border border-blue-100">
          <HeroHeader />

          <UploadArea fileInputRef={fileInputRef} onUpload={handlePhotoUpload} />
          <PhotoPreviews photos={photos} />
          <GenerateButton
            photos={photos}
            loading={loading}
            onGenerate={handleGenerateModel}
          />
        </div>

        <ReferenceTips />
      </div>
    </div>
  );
}
