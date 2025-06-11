export default function Footer({ theme }) {
  return (
    <footer
      className={`
        w-full
        text-center
        py-1 md:py-2 lg:py-4
        font-medium text-lg
        ${theme === 'dark' 
          ? 'text-stone-100' 
          : 'text-stone-800'}
      `}
    >
      <small>
        Copyright &copy;
      </small>
    </footer>
  )
}