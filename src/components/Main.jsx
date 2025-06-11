import GifGrid from "./GifGrid"
import downArrow from '../assets/down-arrow.svg'
export default function Main ({gifs,onSelect}) {
  return (
    <main className="mb-8">
      <p className="
        mb-8
        uppercase text-stone-100 font-normal text-center underline text-xs md:text-sm lg:text-base
      ">
        View your gifs below
      </p>
      <GifGrid gifs={gifs} onSelect={onSelect} />
      <img 
        src={downArrow} 
        alt="Scroll down to view more GIFs"
        className="
            motion-safe:animate-bounce
            w-6 md:w-7 lg:w-8 h-auto
            filter invert 
            cursor-pointer
            mt-8
            mx-auto
        " 
    />
    </main>
  )
}