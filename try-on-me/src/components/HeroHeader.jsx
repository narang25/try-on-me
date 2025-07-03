export default function HeroHeader() {
  return (
    <div className="mb-6">
      <h1 className="text-5xl font-extrabold leading-tight text-gray-900 tracking-tight">
        Transform Photos Into <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600 animate-gradient">
          3D Avatars
        </span>{' '}
        Instantly
      </h1>
      <p className="text-lg text-gray-600 mt-4">
        Upload 4–5 well-lit pictures from different angles and generate a full-body 3D model ready for virtual try-ons.
      </p>
    </div>
  );
}
