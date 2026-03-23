export default function Toolbar() {
  return (
    <div className="h-12 border-b flex items-center px-4 gap-2">
      <button>Move</button>
      <button>Rotate</button>
      <button>Scale</button>
      <button>Cube</button>
      <button>Sphere</button>
    </div>
  );
}