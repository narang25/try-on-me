import { useState, useRef } from 'react';
import { CloudUpload, Loader2 } from 'lucide-react';

export default function Home() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef();

  const handlePhotoUpload = (e) => {
    const files = Array.from(e.target.files);
    setPhotos((prev) => [...prev, ...files].slice(0, 5));
  };

  const handleGenerateModel = () => {
    if (photos.length < 4) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert('Model generation triggered!');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-50 via-blue-100 to-blue-50 p-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Left: Upload Section */}
        <div className="md:col-span-2">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-2">Create Your <span className="text-blue-600">3D Avatar</span></h1>
          <p className="text-gray-600 mb-6">Upload 4–5 images (front, side, back) to auto-generate your digital twin.</p>

          {/* Upload Box */}
          <div
            onClick={() => fileInputRef.current.click()}
            className="cursor-pointer border-dashed border-4 border-blue-300 rounded-xl p-10 bg-white hover:bg-blue-50 transition-all shadow-sm"
          >
            <div className="flex flex-col items-center justify-center space-y-4">
              <CloudUpload size={48} className="text-blue-500" />
              <p className="text-xl font-medium text-blue-700">Click or drag & drop your photos</p>
              <p className="text-sm text-gray-500">(Max 5 photos: front, left, right, back)</p>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                multiple
                onChange={handlePhotoUpload}
                className="hidden"
              />
            </div>
          </div>

          {/* Image Previews */}
          {photos.length > 0 && (
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {photos.map((photo, idx) => (
                <img
                  key={idx}
                  src={URL.createObjectURL(photo)}
                  alt={`Uploaded ${idx}`}
                  className="w-full h-40 object-cover rounded-lg shadow"
                />
              ))}
            </div>
          )}

          {/* Generate Button */}
          <div className="mt-8 text-center">
            <button
              onClick={handleGenerateModel}
              disabled={photos.length < 4 || loading}
              className={`px-8 py-3 rounded-xl text-white font-semibold transition-all duration-300 ${
                loading
                  ? 'bg-blue-400 cursor-not-allowed'
                  : 'bg-blue-600 hover:bg-blue-700'
              }`}
            >
              {loading ? (
                <div className="flex items-center gap-2 justify-center">
                  <Loader2 className="animate-spin" />
                  Generating Model...
                </div>
              ) : (
                'Generate 3D Model'
              )}
            </button>
            {photos.length < 4 && (
              <p className="mt-2 text-sm text-red-500">Upload at least 4 photos to continue.</p>
            )}
          </div>
        </div>

        {/* Right: Reference Guide */}
        <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-center">
          <h2 className="text-xl font-bold text-gray-700 mb-4">Photo Guidelines 📸</h2>
          <img
            src="https://cdn3d.iconscout.com/3d/premium/thumb/man-showing-a-thumb-up-like-sign-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--logo-work-thumbs-male-character-pack-professionals-illustrations-8102407.png"
            alt="Reference Model Example"
            className="w-full rounded-lg border"
          />
          <ul className="text-sm text-gray-600 mt-4 list-disc list-inside">
            <li>Face forward (neutral pose)</li>
            <li>Side views with arms relaxed</li>
            <li>Back view clearly visible</li>
            <li>Good lighting & background</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
