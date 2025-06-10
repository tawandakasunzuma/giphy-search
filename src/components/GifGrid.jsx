import GifCard from "./GifCard"

export default function GifGrid ({gifs}) {
  const gifInfo = gifs.map(gif => (
    <GifCard 
      key={gif.id} 
      url={gif.media_formats.gif.url} 
      description={gif.content_description} 
    />
  ))
  return (
    <div className="
      grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4
      justify-items-center align-items-center gap-y-16 lg:gap-x-16
      mx-16 md:mx-20 lg:mx-24 py-8 px-4 md:px-6 lg:px-8
      bg-stone-100 rounded-md md:rounded-lg lg:rounded-xl
    ">
      {gifInfo}
    </div>
  )
}