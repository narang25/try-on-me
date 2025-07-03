import { RotateCcw, Maximize2 } from 'lucide-react';

export default function AvatarControls({ onResetView, onFullscreen }) {
  return (
    <div className="flex gap-3">
      <button
        onClick={onResetView}
        className="bg-white shadow px-4 py-2 rounded-lg hover:bg-blue-100 transition"
      >
        <RotateCcw className="w-5 h-5" />
      </button>
      <button
        onClick={onFullscreen}
        className="bg-white shadow px-4 py-2 rounded-lg hover:bg-blue-100 transition"
      >
        <Maximize2 className="w-5 h-5" />
      </button>
    </div>
  );
}
