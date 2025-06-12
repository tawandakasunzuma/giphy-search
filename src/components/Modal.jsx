import { useEffect, useState } from 'react'
import infoDark from '../assets/info-dark.svg'
import infoLight from '../assets/info-light.svg'

export default function Modal({gif, onClose, theme}) {
  const [visible, setVisible] = useState(false);
  const [learnMore,setLearnMore] = useState(false)

  function download() {
    fetch(gif?.media_formats.gif.url)
      .then(response => response.blob())
      .then(blob => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `${gif?.content_description || 'download'}.gif`;
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
    setVisible(false)
    const timer = setTimeout(() => setVisible(true), 10);

    function escapeKey(event) {
      if (event.key === "Escape") {
        setVisible(false);
        setTimeout(() => onClose(), 600);
      }
    }

    document.addEventListener("keydown", escapeKey);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("keydown", escapeKey);
    }
  }, [gif, onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      onClick={onClose}
      className={`
        fixed inset-0 bg-black bg-opacity-75 
        flex items-center justify-center 
        z-[99]
        transition-opacity duration-300
        ${visible ? 'opacity-100' : 'opacity-0'}
      `}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className={`
          p-6
          max-w-sm md:max-w-md lg:max-w-lg w-full
          rounded-lg shadow-lg
          transform transition-all duration-700
          ${theme === 'dark' 
            ? 'bg-gradient-to-br from-gray-900 via-indigo-800 to-blue-900' 
            : 'bg-gradient-to-br from-blue-50 via-sky-200 to-blue-400'
          }
        `}
      >
        {!learnMore
          ? <>
              <p 
                className={`
                  text-xs md:text-sm lg:text-md 
                  font-medium text-center 
                  mb-2
                  opacity-75
                  ${theme === 'dark' 
                  ? 'text-stone-200' 
                  : 'text-stone-800'
                  }
              `}
              >
                Click to learn more
              </p>
              <img
                src={theme === 'dark' ? infoLight: infoDark} 
                onClick={() => {setLearnMore(true)}}
                alt="Info icon"
                className="
                    h-auto w-3 md:w-4 lg:w-5
                    cursor-pointer
                    mb-4 mx-auto
                    transition-all duration-300 ease-in-out
                    transform hover:scale-[1.02]
                    opacity-75 hover:opacity-100 active:opacity-50
                " 
              />
            </>
          : <h2 
              className={`
                text-xs md:text-sm lg:text-md 
                font-medium text-center 
                mb-4
                ${theme === 'dark' 
                ? 'text-stone-200' 
                : 'text-stone-800'
              }
              `}
            >
          {gif?.content_description}
        </h2>
        }
        <div 
          className={`
            w-full h-48 md:h-56 lg:h-64 rounded-xl flex items-center justify-center overflow-hidden
            shadow-md
          `}
        >
          <img 
            src={gif?.media_formats.gif.url}
            alt={gif?.content_description} 
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex flex-row justify-between gap-4 mt-6">
          <button 
            onClick={download}
            aria-label={`Download ${gif?.content_description || 'gif'}`}
            className={`
              bg-green-600 hover:bg-green-500 active:bg-green-300
              text-stone-50 
              font-normal
              text-xs md:text-sm lg:text-base
              py-1 md:py-2 lg:py-2
              px-2 md:px-4 md:px-6
              rounded transition duration-300
              mx-auto block
            `}
          >
            Download
          </button>
          <button
            autoFocus
            onClick={onClose}
            className={`
              bg-sky-700 hover:bg-sky-600 active:bg-sky-400
              text-stone-50 
              font-normal
              text-xs md:text-sm lg:text-base
              py-1 md:py-2 lg:py-2
              px-2 md:px-4 md:px-6
              rounded transition-all duration-700
              mx-auto block
            `}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
