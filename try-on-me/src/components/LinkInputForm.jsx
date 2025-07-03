import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function LinkInputForm({ onFetchProduct }) {
  const [link, setLink] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!link.includes('walmart.com')) {
      setError('❌ Please paste a valid Walmart product link.');
      return;
    }
    setError('');
    onFetchProduct(link); // Trigger parent handler
    setLink('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white/70 backdrop-blur-md p-6 rounded-xl shadow-md flex items-center gap-4 border border-blue-200"
    >
      <input
        type="url"
        placeholder="Paste Walmart product link here..."
        value={link}
        onChange={(e) => setLink(e.target.value)}
        className="flex-1 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
      <button
        type="submit"
        className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-indigo-700 transition flex items-center gap-2"
      >
        Try On
        <ArrowRight className="w-4 h-4" />
      </button>

      {error && <p className="text-red-500 text-sm mt-2 absolute -bottom-6 left-6">{error}</p>}
    </form>
  );
}
