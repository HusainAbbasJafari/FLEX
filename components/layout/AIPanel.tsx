export default function AIPanel() {
  return (
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-gray-800 border border-gray-700 p-2 rounded flex gap-2 shadow-lg">

      <input
        placeholder="Create a 3D scene..."
        className="bg-transparent outline-none w-64"
      />

      <button className="bg-blue-500 px-3 py-1 rounded">
        Generate
      </button>
    </div>
  );
}