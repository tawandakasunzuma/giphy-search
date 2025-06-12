import { useState } from 'react'
import searchIcon from '../assets/search-icon.svg'

export default function SearchBar({ onSearch, theme }) {

  const [searchTerm, setSearchTerm] = useState("")

  function handleChange(event) {
    setSearchTerm(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault()
    if (searchTerm.trim() !== "") {
      onSearch(searchTerm)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="
        flex flex-col justify-center items-center
        mb-8 gap-2 md:gap-3 lg:gap-4
      "
    >

      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder='Search for Gif'
        className={`
          rounded-2xl md:rounded-3xl lg:rounded-4xl w-60 md:w-72 lg:w-96
          text-sm md:text-md lg:text-md py-1 md:py-2 lg:py-3 px-4 md:px-5 lg:px-5
          ${theme === 'dark' 
            ? 'bg-stone-200 text-stone-800 placeholder-stone-600' 
            : 'bg-stone-100 text-stone-700 placeholder-stone-600'
          }
        `}
      />

      <button type='submit'>
        <img
          src={searchIcon}
          alt="Search icon"
          className={`
            h-auto w-4 md:w-5 lg:w-6
            opacity-50 hover:opacity-75 active:opacity-100
            cursor-pointer
            transition-all duration-300 ease-in-out
            transform hover:scale-105
            ${theme === 'dark' ? 'filter invert' : 'filter-none'}
          `}
        />
      </button>

    </form>
  )
}
