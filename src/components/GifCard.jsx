export default function GifCard ({url,description,onSelect}) {
  return (
    <div 
      className="
        w-full 
        max-w-[150px] md:max-w-[175px] lg:max-w-[200px] aspect-w-1 
        max-h-[150px] md:max-h-[175px] lg:max-h-[200px] aspect-h-1
      ">
      <img 
        onClick={onSelect}
        src={url} 
        alt={description}
        className="
          w-full h-full 
          object-contain
          rounded-sm
          border-2 hover:border-4 border-stone-200
          shadow-sm hover:shadow-lg shadow-stone-400 transition-shadow duration-600 ease
          cursor-pointer
        "
      />
    </div>
  )
}