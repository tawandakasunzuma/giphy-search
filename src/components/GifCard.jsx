export default function GifCard ({url,description,onSelect}) {
  return (
      <img 
        onClick={onSelect}
        src={url} 
        alt={description}
        className="
          w-auto max-h-32 md:max-h-48 lg:max-h-48 
          object-contain
          rounded-sm
          border-4 border-stone-200
          shadow-lg shadow-stone-400
          cursor-pointer
        "
      />
  )
}