import { useEffect } from 'react'

export default function Modal({gif,onClose}) {

    function download() {
      fetch(gif?.media_formats.gif.url)
        .then(response => response.blob())
        .then(blob => {
          const url = URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.href = url;
          a.download = `${gif?.content_description}gif`;
          document.body.appendChild(a);
          a.click();
          a.remove();
          URL.revokeObjectURL(url);
        })
        .catch(err => {
          console.error("Download failed:", err);
        });
    }

  useEffect(() => {

    function escapeKey (event) {
      if (event.key === "Escape") {
        onClose();
      }
    }
    
    document.addEventListener("keydown", escapeKey)

    return () => {
      document.removeEventListener("keydown", escapeKey)
    }
  
  },[])
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
        <div className='flex flex-row justify-between'>
            <button 
              onClick={download}
              className="
                bg-green-600 hover:bg-green-500
                text-stone-50 
                font-normal md:font-normal lg:font-normal
                text-sm md:text-sm lg:text-base
                py-1 md:py-2 lg:py-2
                px-2 md:px-4 md:px-6 mt-6
                rounded transition duration-200
                mx-auto block
              "
            >
              Download
          </button>
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
    </div>
  );
}