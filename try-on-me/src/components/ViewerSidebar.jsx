import { useState } from 'react';
import { ChevronsLeft, ChevronsRight, RefreshCcw } from 'lucide-react';

export default function ViewerSidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      className={`fixed top-0 left-0 h-full z-30 bg-white/30 backdrop-blur-xl border-r border-blue-200 shadow-lg transition-all duration-300 ${
        collapsed ? 'w-[60px]' : 'w-[280px]'
      }`}
    >
      {/* Toggle Button */}
      <button
        className="absolute top-4 right-2 bg-blue-100 rounded-full p-1 hover:bg-blue-200 transition"
        onClick={() => setCollapsed((prev) => !prev)}
      >
        {collapsed ? <ChevronsRight size={20} /> : <ChevronsLeft size={20} />}
      </button>

      {/* Content */}
      <div className={`p-5 transition-opacity duration-300 ${collapsed ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <h2 className="text-xl font-semibold text-blue-800 mb-4">👤 Avatar Info</h2>

        <ul className="text-sm text-gray-700 space-y-2">
          <li><strong>Status:</strong> Loaded</li>
          <li><strong>Model:</strong> avatar.glb</li>
          <li><strong>Controls:</strong> Orbit (Zoom/Rotate)</li>
        </ul>

        <hr className="my-4 border-blue-200" />

        <h3 className="text-md font-semibold mb-2 text-blue-800">⚙️ Actions</h3>
        <button
          onClick={() => window.location.reload()}
          className="flex items-center gap-2 text-sm bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition"
        >
          <RefreshCcw size={16} /> Reload Avatar
        </button>

        {/* (Optional ClothingLoader placeholder) */}
        <div className="mt-6 text-sm text-gray-500 italic">
          Clothing Loader coming soon 👕
        </div>
      </div>
    </div>
  );
}
