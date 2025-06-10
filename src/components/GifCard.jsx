export default function GifCard ({url,description}) {
  return (
      <img src={url} alt={description} className="
        w-auto max-h-32 md:w-auto md:max-h-48 lg:w-auto lg:max-h-48 
        rounded-sm
        border-4 border-stone-300
        shadow-lg shadow-blue-400
        cursor-pointer"
      />
  )
}