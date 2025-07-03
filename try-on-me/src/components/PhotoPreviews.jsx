export default function PhotoPreviews({ photos }) {
  if (!photos || photos.length === 0) return null;

  return (
    <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {photos.map((photo, idx) => (
        <img
          key={idx}
          src={URL.createObjectURL(photo)}
          alt={`Upload ${idx}`}
          className="w-full h-40 object-cover rounded-xl shadow-lg border border-blue-200 hover:scale-105 transition"
        />
      ))}
    </div>
  );
}
