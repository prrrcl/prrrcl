import gsap from 'gsap'
import { useRef, useEffect } from 'react'

const useAnimation = ({ onEnter, duration, animation, childOfChilds }) => {
  const ref = useRef()
  const { current: tl } = useRef(gsap.timeline({ paused: true }))

  useEffect(() => {
    if (onEnter) {
      const newRefs = childOfChilds
        ? Array.from(ref.current.children).map(r => r.children)
        : ref.current.children
      tl.from(newRefs, duration, animation)
      tl.play()
    }
  }, [])

  return { ref, tl }
}

export default useAnimation
