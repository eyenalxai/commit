import CopyToClipboard from "react-copy-to-clipboard"
import { Button, ButtonProps } from "./Button"
import { useState } from "react"

interface CopyButtonProps {
  textToCopy: string
}

export function CopyButton({ buttonText, textToCopy }: CopyButtonProps & ButtonProps) {
  const [isCopied, setIsCopied] = useState<boolean>(false)

  function whatever() {
    setIsCopied(true)
    setTimeout(() => {
      setIsCopied(false)
    }, 300)
  }

  return (
    <CopyToClipboard text={textToCopy} onCopy={() => whatever()}>
      <Button buttonText={buttonText} isCopied={isCopied} />
    </CopyToClipboard>
  )
}
