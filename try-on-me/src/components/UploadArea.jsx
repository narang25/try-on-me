import { CloudUpload } from 'lucide-react';
import { useCallback } from 'react';

export default function UploadArea({ photos, setPhotos, fileInputRef }) {
  const handlePhotoUpload = useCallback(
    (e) => {
      const files = Array.from(e.target.files);
      const validImages = files.filter((file) => file.type.startsWith('image/'));

      if (validImages.length + photos.length > 5) {
        alert("⚠️ You can only upload up to 5 photos.");
        return;
      }

      const uniqueFiles = validImages.filter((file) => {
        return !photos.some((existing) => existing.name === file.name && existing.size === file.size);
      });

      setPhotos((prev) => [...prev, ...uniqueFiles].slice(0, 5));
    },
    [photos, setPhotos]
  );

  const handleDrop = (e) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    const event = { target: { files } };
    handlePhotoUpload(event);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div
      onClick={() => fileInputRef.current.click()}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      className="cursor-pointer border-dashed border-4 border-blue-400 rounded-xl p-10 bg-white bg-opacity-70 backdrop-blur-md hover:bg-opacity-90 transition-all relative group"
    >
      <div className="flex flex-col items-center justify-center space-y-4 pointer-events-none">
        <CloudUpload size={48} className="text-blue-600 group-hover:scale-110 transition-transform" />
        <p className="text-xl font-medium text-blue-800">Click or drag & drop your photos</p>
        <p className="text-sm text-gray-500">(Front, left, right, back – max 5)</p>
        <p className="text-xs text-gray-400 italic">JPG, PNG – under 5MB recommended</p>
      </div>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        multiple
        onChange={handlePhotoUpload}
        className="hidden"
      />
    </div>
  );
}
