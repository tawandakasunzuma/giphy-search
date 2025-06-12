export default function GifCard({ url, description, onSelect, theme }) {
  return (
    <div
      className="
        w-full 
        max-w-[150px] md:max-w-[175px] lg:max-w-[200px] aspect-w-1 
        max-h-[150px] md:max-h-[175px] lg:max-h-[200px] aspect-h-1
      "
    >
      <img
        onClick={onSelect}
        src={url}
        alt={description}
        className={`
          w-full h-full 
          object-cover
          rounded-lg md:rounded-xl lg:rounded-xl 
          border-8
          cursor-pointer
          transition-all duration-300 ease-in-out
          transform hover:scale-105
          ${
            theme === 'dark'
              ? `
                border-indigo-800
                shadow-lg hover:shadow-2xl
              `
              : `
                border-blue-200
                shadow-sm hover:shadow-lg
              `
          }
        `}
      />
    </div>
  );
}
