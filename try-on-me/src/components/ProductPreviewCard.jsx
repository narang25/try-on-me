import { Loader2, Shirt, Link2 } from 'lucide-react';

export default function ProductPreviewCard({ product, loading }) {
  if (loading) {
    return (
      <div className="bg-white/80 rounded-xl shadow-md p-6 border border-blue-200 flex items-center justify-center min-h-[200px]">
        <Loader2 className="animate-spin w-8 h-8 text-blue-500" />
        <p className="ml-4 text-blue-600 font-medium">Fetching product info...</p>
      </div>
    );
  }

  if (!product) return null;

  return (
    <div className="bg-white/90 rounded-xl shadow-md border border-blue-200 overflow-hidden flex flex-col md:flex-row gap-6 p-6">
      {/* Product Image */}
      <div className="flex-shrink-0 w-full md:w-48 h-48 bg-gray-100 rounded-lg overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Product Info */}
      <div className="flex-1 space-y-2">
        <h3 className="text-lg font-semibold text-gray-800">{product.title}</h3>
        <p className="text-sm text-gray-600">{product.brand}</p>
        <p className="text-blue-600 font-medium text-base">${product.price}</p>
        <div className="flex items-center gap-2 text-sm mt-2 text-gray-500">
          <Link2 className="w-4 h-4" />
          <a
            href={product.url}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-blue-500 transition"
          >
            View on Walmart
          </a>
        </div>
      </div>

      {/* Try-On Tag */}
      <div className="flex items-center gap-2 text-blue-600 font-medium">
        <Shirt className="w-5 h-5" />
        Ready to try on!
      </div>
    </div>
  );
}
