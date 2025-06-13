import GifCard from "./GifCard";

export default function GifGrid({ gifs, onSelect, theme }) {
  const gifInfo = gifs.map(gif => (
    <div key={gif.id} className="flex justify-center">
      <GifCard
        url={gif.media_formats.gif.url}
        description={gif.content_description}
        onSelect={() => onSelect(gif)}
        theme={theme}
      />
    </div>
  ));

  return (
    <div
      className={`
        grid 
        [grid-template-columns:repeat(auto-fit,minmax(150px,1fr))]
        md:[grid-template-columns:repeat(auto-fit,minmax(175px,1fr))]
        lg:[grid-template-columns:repeat(auto-fit,minmax(200px,1fr))]
        gap-4 md:gap-6 lg:gap-8 
        mx-[5vw]
        py-4 md:py-6 lg:py-8
        px-4 md:px-6 lg:px-8 
        rounded-lg md:rounded-xl lg:rounded-xl
        shadow-3xl
        ${
          theme === "dark"
            ? 'bg-gradient-to-t from-blue-900 via-indigo-800 to-gray-00'
            : 'bg-gradient-to-t from-blue-300 via-sky-200 to-sky-00'
        }
      `}
    >
      {gifInfo}
    </div>
  );
}
