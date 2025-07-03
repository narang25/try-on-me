import { X } from 'lucide-react';

export default function PhotoPreviewGrid({ photos, setPhotos }) {
  const handleRemove = (indexToRemove) => {
    const updated = photos.filter((_, idx) => idx !== indexToRemove);
    setPhotos(updated);
  };

  if (photos.length === 0) return null;

  return (
    <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {photos.map((photo, idx) => (
        <div key={idx} className="relative group">
          <img
            src={URL.createObjectURL(photo)}
            alt={`Uploaded ${idx + 1}`}
            className="w-full h-40 object-cover rounded-xl shadow-md border border-blue-200 group-hover:opacity-80 transition-transform group-hover:scale-[1.03]"
          />
          <button
            onClick={() => handleRemove(idx)}
            className="absolute top-1 right-1 bg-white bg-opacity-90 text-red-500 rounded-full p-1 hover:bg-red-500 hover:text-white transition-all"
            aria-label="Remove photo"
          >
            <X size={18} />
          </button>
        </div>
      ))}
    </div>
  );
}
