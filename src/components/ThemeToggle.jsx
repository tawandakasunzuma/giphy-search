import switchIcon from "../assets/switch-icon.svg"

export default function ThemeToggle () {
  return (
    <img 
      src={switchIcon} 
      alt="Switch icon"
      className="
          w-6 h-auto md:w-7 lg:w-8
          filter invert 
          cursor-pointer
          my-4
      " 
  />
  )
}