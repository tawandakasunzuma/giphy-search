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
      lg:mx-32 lg:mx-16 sm:mx-4
      px-8
    ">
      {gifInfo}
    </div>
  )
}