import GifGrid from "./GifGrid"
import downArrow from '../assets/down-arrow.svg'
export default function Main () {
  return (
    <main className="mb-8">
      <p className="
        mb-8
        uppercase text-stone-100 font-normal text-center underline text-md lg:text-lg
      ">
        View your gifs below
      </p>
      <GifGrid />
      <img 
        src={downArrow} 
        alt="Down arrow"
        className="
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