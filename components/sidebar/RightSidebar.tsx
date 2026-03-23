export default function RightSidebar({ selected }: any) {
  return (
    <div className="h-full border-l border-gray-700 p-4 text-sm">

      <h3 className="mb-3 text-gray-400">Inspector</h3>

      {selected ? (
        <div className="space-y-3">

          <div>
            <label className="text-xs text-gray-500">Position X</label>
            <input className="w-full bg-gray-800 p-1 rounded" />
          </div>

        </div>
      ) : (
        <p className="text-gray-500">No Selection</p>
      )}

    </div>
  );
}