export function Loading() {
  return (
    <div className="w-full flex h-full flex-col items-center justify-center">
      <div className="loader flex flex-col gap-2">
        <div className="spinner"></div>
        <span class="text-white ">Loading...</span>
      </div>
    </div>
  );
}
