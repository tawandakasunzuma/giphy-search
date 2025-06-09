import SearchBar from "./SearchBar"
import ThemeToggle from "./ThemeToggle"

export default function Header () {
    return (
        <header className="pt-8 md:pt-12 lg:pt-16 flex flex-col justify-center items-center ">
            <div className="
                flex flex-col justify-around items-center mb-4
                md:flex md:flex-row md:justify-around md:items-center md:w-full
            ">
                <span></span>
                <h1 className="
                        uppercase text-2xl md:text-3xl lg:text-4xl 
                        text-stone-100 font-medium tracking-wide
                ">
                    Searcha Gif
                </h1>
                <ThemeToggle />
            </div>
            <p className="
                text-stone-200 text-center text-xs md:text-sm
                sm:px-8 md:px-16 lg:px-32
                mb-8 md:mt-4 md:mb-12 lg:mt-8 lg:mb-16
            ">
                This is a description of the app and everything it does, so the user knows what it is.
            </p>
            <SearchBar />
        </header>
    )
}