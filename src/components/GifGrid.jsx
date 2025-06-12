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
        grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] 
        gap-4 md:gap-6 lg:gap-8 
        mx-24 md:mx-28 lg:mx-32 
        py-8 md:px-6 px-4 lg:px-8 
        rounded-md md:rounded-lg lg:rounded-xl
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
