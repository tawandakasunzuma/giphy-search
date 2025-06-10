export default function Modal() {
  return (
    <div
      className="
        fixed inset-0 bg-black bg-opacity-50 
        flex items-center justify-center 
        z-99
      "
    >
      <div
        className="
          bg-white rounded-lg p-6 max-w-lg w-full
          shadow-lg
        "
      >
        <h2 className="text-xl font-semibold mb-4 text-gray-800 text-center">
          GIF Modal Title
        </h2>
        <div className="w-full h-64 bg-gray-200 rounded-md flex items-center justify-center">
          <p className="text-gray-500">GIF goes here</p>
        </div>
        <button
          className="
            mt-6 bg-blue-600 hover:bg-blue-700 
            text-white font-medium py-2 px-4 
            rounded transition duration-200
            mx-auto block
          "
        >
          Close
        </button>
      </div>
    </div>
  );
}