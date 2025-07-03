export default function ReferenceTips() {
  return (
    <div className="glass rounded-2xl p-6 shadow-xl flex flex-col items-center justify-center text-center border border-purple-100">
      <img
        src="https://cdn3d.iconscout.com/3d/premium/thumb/man-showing-a-thumb-up-like-sign-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--logo-work-thumbs-male-character-pack-professionals-illustrations-8102407.png"
        alt="Reference Pose Guide"
        className="w-full max-w-sm object-contain drop-shadow-xl hover:scale-105 transition"
        loading="lazy"
      />
      <h2 className="text-2xl font-bold text-gray-700 mt-6 mb-2">Perfect Pose Tips 🧍</h2>
      <ul className="text-sm text-gray-600 list-disc list-inside space-y-1 text-left">
        <li><strong>Front view:</strong> Stand naturally, face camera</li>
        <li><strong>Side profile:</strong> Arms relaxed by side</li>
        <li><strong>Back view:</strong> Straight posture</li>
        <li><strong>Lighting:</strong> Even, bright environment</li>
        <li><strong>Background:</strong> Plain wall, avoid clutter</li>
      </ul>
    </div>
  );
}
