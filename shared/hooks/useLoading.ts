import { useAtom } from "jotai"
import LOADING from "components/transition/atom"

export default function useLoading() {
  const [, setLoading] = useAtom(LOADING)

  const openLoading = () => setLoading(true)

  const closeLoading = () => setTimeout(() => setLoading(false), 200)

  const delayedClose = (num?: number) => {
    setTimeout(() => setLoading(false), num || 500)
  }
  return { openLoading, closeLoading, delayedClose }
}
