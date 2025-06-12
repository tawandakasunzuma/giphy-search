import GifGrid from "./GifGrid"
import lightDownArrow from '../assets/down-arrow-light.svg'
import darkDownArrow from '../assets/down-arrow-dark.svg'

export default function Main({ gifs, onSelect, theme, onLoadMore, currentlySearching }) {
  return (
    <main className="mb-8">
      <p className={`
        opacity-80
        ${theme === 'dark' 
          ? 'text-stone-100' 
          : 'text-stone-800'
        }
        mb-4
        uppercase font-normal text-center underline 
        text-xs md:text-sm lg:text-base
        animate-bounce
      `}>
        View your gifs below!
      </p>
      <GifGrid gifs={gifs} onSelect={onSelect} theme={theme} />
      {currentlySearching &&
        <img 
          src={
            theme === 'dark' 
              ? darkDownArrow
              : lightDownArrow
            } 
          alt="Scroll down to view more GIFs"
          onClick={onLoadMore}
          className="
            motion-safe:animate-bounce
            w-6 md:w-7 lg:w-8 h-auto
            filter invert 
            cursor-pointer
            mt-8
            mx-auto
            opacity-75 active:opacity-100
          " 
        />
      }
    </main>
  )
}
