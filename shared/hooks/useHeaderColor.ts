import COLOR from "components/header/atoms"
import { useAtom } from "jotai"

export default function useHeaderColor() {
  const [, set] = useAtom(COLOR)

  const resetColor = () => set("black")

  const setColor = (color: "black" | "white") => set(color)

  return { setColor, resetColor }
}
