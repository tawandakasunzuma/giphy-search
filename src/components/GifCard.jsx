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
        tabIndex={0}
        role="button"
        loading="lazy"
        onClick={onSelect}
        src={url}
        alt={description}
        className={`
          w-full h-full 
          object-cover
          rounded-lg md:rounded-xl lg:rounded-xl 
          border-4 md:border-6 lg:border-8
          cursor-pointer
          transition-all duration-300 ease-in-out
          transform hover:scale-[1.02]
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
