import { AnimatePresence, AnimateSharedLayout } from "framer-motion"
import { useAtom } from "jotai"
import { useEffect } from "react"
import Transition from "."
import LOADING from "./atom"

export default function TransitionWrapper(props: any) {
  const [isLoading, setLoading] = useAtom(LOADING)
  const { children, pathname } = props

  useEffect(() => {
    setLoading(!!pathname)
  }, [pathname, setLoading])

  return (
    <AnimateSharedLayout>
      <AnimatePresence initial>
        {children}
        <AnimatePresence initial={false}>
          {isLoading && (
            <Transition
              key={`transition-${pathname}-${new Date().getTime()}`}
            />
          )}
        </AnimatePresence>
      </AnimatePresence>
    </AnimateSharedLayout>
  )
}
