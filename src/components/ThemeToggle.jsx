import darkModeIcon from "../assets/dark-mode-switch-blue.svg"
import lightModeIcon from "../assets/light-mode-switch.svg"

export default function ThemeToggle ({onToggle, theme}) {
  return (

    <img
      onClick={onToggle}
      src={theme === 'dark' ? lightModeIcon : darkModeIcon} 
      alt="Switch icon"
      className="
          h-auto w-3 md:w-4 lg:w-5
          cursor-pointer
          my-4
          transition-all duration-700 ease-in-out
          transform hover:scale-125
          opacity-100
          animate-pulse
      " 
  />
  
  )
}