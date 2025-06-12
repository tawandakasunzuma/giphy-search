export default function GifCard({ url, description, onSelect, theme }) {
  return (
    <div
      className="
        w-full 
        max-w-[160px] md:max-w-[200px] lg:max-w-[240px] 
        aspect-square
      "
    >
      <img
        onClick={onSelect}
        loading="lazy"
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
