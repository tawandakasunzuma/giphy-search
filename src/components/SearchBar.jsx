import searchIcon from '../assets/search-icon.svg'

export default function SearchBar() {
  function handleChange (event) {
    event.preventDefault();
  }
  return (
    <div className="
      flex flex-col justify-center items-center
      mb-8 gap-2 md:gap-3 lg:gap-4
    ">

      <img 
        src={searchIcon} 
        alt="Search icon" 
        className="
          w-5 h-auto md:w-6 lg:w-7
          filter invert 
          cursor-pointer
        "
      />
      
      <input 
        type="text"
        onChange={handleChange}
        className="
          bg-stone-200 rounded-2xl w-60 md:w-72 lg:w-96
          text-sm py-1 px-4
        " 
      />

    </div>
  )
}