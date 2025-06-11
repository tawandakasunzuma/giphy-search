export default function Modal({gif,onClose}) {
  return (
    <div
      onClick={onClose}
      className="
        fixed inset-0 bg-black bg-opacity-50 
        flex items-center justify-center 
        z-99
      "
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="
          bg-stone-50 rounded-lg p-6 max-w-sm md:max-w-md lg:max-w-lg w-full
          shadow-lg
        "
      >
        <h2 
          className="
            text:base md:text-lg lg:text-xl
            font-medium md:font-medium lg:font-medium 
            text-stone-800 text-center
            mb-4
          ">
          {gif?.content_description}
        </h2>
        <div 
          className="
            w-full h-48 md:h-56 lg:h-64 
            bg-stone-100 rounded-xl
            flex items-center justify-center
            overflow-hidden
          ">
          <img 
            src={gif?.media_formats.gif.url}
            alt={gif?.content_description} 
            className="w-full h-full object-contain"
          />
        </div>
        <button
          onClick={onClose}
          className="
            bg-sky-700 hover:bg-sky-600
            text-stone-50 
            font-normal md:font-normal lg:font-normal
            text-sm md:text-sm lg:text-base
            py-1 md:py-2 lg:py-2
            px-2 md:px-4 md:px-6 mt-6
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