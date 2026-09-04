export default function HeaderPage() {
  return (
    <div className="flex items-center justify-center w-full py-6">
      <div className="flex items-center w-full max-w-3xl">
        {/* Step 1 */}
        <div className="flex items-center">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white font-semibold">
            1
          </div>

          <span className="ml-3 text-sm font-medium text-blue-600">
            Import File
          </span>
        </div>

        {/* Line */}
        <div className="flex-1 h-0.5 mx-4 bg-gray-300" />

        {/* Step 2 */}
        <div className="flex items-center">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 text-gray-600 font-semibold">
            2
          </div>

          <span className="ml-3 text-sm font-medium text-gray-500">
            Process File
          </span>
        </div>

        {/* Line */}
        <div className="flex-1 h-0.5 mx-4 bg-gray-300" />

        {/* Step 3 */}
        <div className="flex items-center">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 text-gray-600 font-semibold">
            3
          </div>

          <span className="ml-3 text-sm font-medium text-gray-500">
            Data Grid
          </span>
        </div>
      </div>
    </div>
  );
}
