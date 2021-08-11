import CURSOR, { CURSOR_TEXT, CURSOR_THEME } from "components/cursor/atoms"
import { useAtom } from "jotai"
import { useMemo } from "react"

interface IHoverParams {
  onHoverText?: string
  theme?: "dark" | "light"
}

export default function useCursor() {
  const [cursor, setCursor] = useAtom(CURSOR)
  const [, setCursorText] = useAtom(CURSOR_TEXT)
  const [, setCursorTheme] = useAtom(CURSOR_THEME)

  const invertedTheme = useMemo<{
    dark: "light"
    light: "dark"
  }>(
    () => ({
      dark: "light",
      light: "dark",
    }),
    []
  )

  const handleIn = ({ onHoverText, theme }: IHoverParams = {}) => {
    setCursor(onHoverText ? "hoverWithText" : "hover")
    if (onHoverText) {
      setCursorText(onHoverText)
    }
    if (theme) {
      setCursorTheme(theme)
    }
  }
  const handleOut = ({ theme }: IHoverParams = {}) => {
    setCursor("default")
    setCursorText("")
    if (theme) setCursorTheme(theme)
  }

  return { handleIn, handleOut, invertedTheme, cursor }
}
