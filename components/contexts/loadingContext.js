import { createContext, useEffect, useState, useRef, useMemo } from 'react'
import { useRouter } from 'next/router'
import { TweenMax, CSSPlugin, Power3 } from 'gsap'

const C = CSSPlugin

export const LoadingContext = createContext()

const { Provider } = LoadingContext

export default function LoadingContextProvider ({ children }) {
  const loadingWrapper = useRef(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isTransitionating, setIsTransitionating] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // First load of app
    TweenMax.to(
      loadingWrapper.current,
      2,
      {
        delay: 1,
        ease: Power3,
        alpha: 0,
        onComplete: () => {
          setIsLoaded(true)
          setIsTransitionating(false)
        }
      }
    )
  }, [])

  const animEnter = (url, e) => {
    e.preventDefault()
    TweenMax.to(
      loadingWrapper.current,
      2,
      {
        ease: Power3,
        alpha: 1,
        onComplete: () => navigate(url)
      }
    )
  }

  const animLeave = (url) => {
    TweenMax.to(
      loadingWrapper.current,
      2,
      {
        onStart: () => router.push(url),
        ease: Power3,
        alpha: 0,
        onComplete: () => {
          setIsLoaded(true)
        }
      }
    )
  }

  const navigatePromise = useMemo(() => new Promise((resolve, reject) => {
    // I manage this with a promises for the future API calls
    setTimeout(resolve, 1000)
  }))

  const navigate = (url) => {
    navigatePromise.then(
      () => animLeave(url)
    )
  }

  return (
    <Provider
      value={{
        navigate: animEnter
      }}>
      <div className={`loading-wrapper ${isLoaded ? 'no-pointable' : ''}`} ref={loadingWrapper}>
      </div>
      {children}
    </Provider>
  )
}
