export interface ButtonProps {
  buttonText: string
  onClick?: () => void
  isCopied?: boolean
  invisible?: boolean
}

export function Button({ buttonText, onClick, isCopied, invisible }: ButtonProps) {
  if (invisible) return null

  function calculateColors(isCopied?: boolean) {
    if (isCopied)
      return "bg-green-200 dark:bg-green-700 dark:hover:bg-green-800 hover:bg-green-300 text-gray-800 dark:text-gray-200"

    return "bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 hover:bg-gray-400 text-gray-800 dark:text-gray-200"
  }

  return (
    <button
      onClick={onClick}
      className={`${calculateColors(isCopied)} pt-1 pb-1.5 px-2 rounded transition duration-300 ease-in-out`}
    >
      {buttonText}
    </button>
  )
}
