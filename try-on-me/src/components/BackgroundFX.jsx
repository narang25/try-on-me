export default function BackgroundFX() {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      {/* Top pink/blue blob */}
      <div className="absolute -top-1/2 left-1/2 w-[600px] h-[600px] bg-gradient-to-br from-pink-400 to-blue-400 opacity-30 rounded-full blur-3xl animate-pulse-slow" />
      
      {/* Bottom indigo/blue blob */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-300 to-indigo-400 opacity-20 rounded-full blur-3xl animate-pulse-slow delay-500" />
    </div>
  );
}
