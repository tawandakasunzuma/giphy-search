export default function Loader({ theme }) {
  return (
    <div
      className={`h-24 w-24 animate-spin ${
        theme === 'dark' ? 'text-stone-100' : 'text-stone-800'
      }`}
    >
      <svg className="h-full w-full" viewBox="0 0 24 24">
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
          fill="none"
        />
        <path
          className="opacity-50"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
        />
      </svg>
    </div>
  );
}
