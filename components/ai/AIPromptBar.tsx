export default function AIPromptBar({
  value,
  onChange,
  onSubmit,
}: any) {
  return (
    <div className="flex gap-2">
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Describe your scene..."
        className="border px-2 py-1 w-64"
      />
      <button onClick={onSubmit}>Generate</button>
    </div>
  );
}