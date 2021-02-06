import { useEffect, useState, useRef } from 'react'

export default function useNearScreen ({ distance = '-100px', once = true } = {}) {
  const [show, setShow] = useState(false)
  const ref = useRef()

  useEffect(() => {
    if (ref.current) {
      const onInteresect = (entries, observer) => {
        const entry = entries[0]
        if (entry.isIntersecting) {
          setShow(true)
          if (!once) observer.disconnect()
        } else if (once) setShow(false)
      }

      const observer = new IntersectionObserver(onInteresect, { rootMargin: distance })
      observer.observe(ref.current)
    }
  }, [distance, once, ref])

  return { isNearScreen: show, fromRef: ref }
}
