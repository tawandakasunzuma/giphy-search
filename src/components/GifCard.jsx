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
          object-contain
          rounded-sm
          border-2 cursor-pointer
          transition-shadow duration-600 ease
          ${
            theme === 'dark'
              ? `
                border-sky-600 hover:border-blue-600
                shadow-md hover:shadow-lg
              `
              : `
                border-stone-200 hover:border-stone-300
                shadow-sm hover:shadow-lg shadow-stone-400
              `
          }
        `}
      />
    </div>
  );
}
