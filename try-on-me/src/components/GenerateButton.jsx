import { Loader2 } from 'lucide-react';

export default function GenerateButton({ photos, loading, onClick }) {
  const isDisabled = photos.length < 4 || loading;

  return (
    <div className="mt-8 text-center">
      <button
        onClick={onClick}
        disabled={isDisabled}
        className={`px-8 py-3 rounded-xl text-white font-semibold text-lg transition-all duration-300 shadow-lg 
        ${
          isDisabled
            ? 'bg-blue-400 cursor-not-allowed'
            : 'bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700'
        }`}
      >
        {loading ? (
          <div className="flex items-center gap-2 justify-center">
            <Loader2 className="animate-spin" size={20} />
            Generating Avatar...
          </div>
        ) : (
          '✨ Generate 3D Avatar'
        )}
      </button>

      {photos.length < 4 && !loading && (
        <p className="mt-2 text-sm text-red-500">Upload at least 4 photos to continue.</p>
      )}
    </div>
  );
}
