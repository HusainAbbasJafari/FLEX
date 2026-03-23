export default function LeftSidebar() {
  return (
    <div className="h-full border-r border-gray-700 p-3 text-sm">
      <h3 className="mb-2 text-gray-400">Scene</h3>

      <div className="space-y-1">
        <div className="hover:bg-gray-700 p-1 rounded">Cube</div>
        <div className="hover:bg-gray-700 p-1 rounded">Sphere</div>
      </div>
    </div>
  );
}