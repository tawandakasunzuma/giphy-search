import GifCard from "./GifCard"

export default function GifGrid () {
  return (
    <div className="
      grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4
      justify-items-center align-items-center gap-y-16 lg:gap-x-16
      lg:mx-64 lg:mx-32 sm: mx-4
    ">
      <GifCard />
      <GifCard />
      <GifCard />
      <GifCard />
    </div>
  )
}