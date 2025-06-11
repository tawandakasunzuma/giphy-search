import GifGrid from "./GifGrid"
import downArrow from '../assets/down-arrow.svg'

export default function Main({ gifs, onSelect, theme }) {
  return (
    <main className="mb-8">
      <p className={`
        ${theme === 'dark' 
          ? 'text-stone-100' 
          : 'text-stone-800'
        }
        mb-8
        uppercase font-normal text-center underline text-xs md:text-sm lg:text-base
      `}>
        View your gifs below
      </p>
      <GifGrid gifs={gifs} onSelect={onSelect} theme={theme} />
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
