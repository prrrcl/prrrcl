import { createContext, useEffect, useState, useRef, useMemo } from 'react'
import { useRouter } from 'next/router'
import gsap from 'gsap'
import { autoLogin } from 'firebase/client'

const TIME_TRANSITION = 1

export const LoadingContext = createContext()

const { Provider } = LoadingContext

export default function LoadingContextProvider ({ children }) {
  const loadingWrapper = useRef(null)
  const gradient = useRef(null)
  const logo = useRef(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [loadAnimations, setLoadAnimations] = useState(false)
  const { current: tlLogo } = useRef(gsap.timeline({ paused: true }))
  const router = useRouter()

  useEffect(() => {
    autoLogin()
    // First load of app
    gsap.to(
      gradient.current,
      {
        alpha: 1,
        duration: TIME_TRANSITION,
        ease: 'power3.inOut'
      }
    )
    gsap.from(
      gradient.current,
      {
        backgroundPositionX: '-440px',
        delay: 2,
        duration: TIME_TRANSITION * 2
      }
    )
    gsap.fromTo(
      logo.current.children,
      {
        y: 0
      }, {
        delay: 0.25,
        duration: TIME_TRANSITION,
        y: 50,
        ease: 'power3.out',
        stagger: {
          amount: 0.04
        }
      }
    )

    gsap.to(
      gradient.current,
      {
        alpha: 0,
        delay: TIME_TRANSITION * 3.3,
        duration: TIME_TRANSITION / 2
      }
    )

    gsap.to(
      logo.current.children,
      {
        y: 100,
        delay: TIME_TRANSITION * 3.5,
        ease: 'power3.out',
        stagger: {
          amount: 0.08
        }
      }
    )

    gsap.to(
      loadingWrapper.current,
      {
        duration: TIME_TRANSITION,
        onStart: () => setLoadAnimations(true),
        delay: TIME_TRANSITION * 3.7,
        ease: 'power3.out',
        top: '100%',
        onComplete: () => {
          setIsLoaded(true)
          setLoadAnimations(false)
        }
      }
    )

    tlLogo
      .fromTo(
        logo.current.children,
        {
          y: 0
        }, {
          duration: TIME_TRANSITION,
          y: 50,
          ease: 'power3.out',
          stagger: {
            amount: 0.04
          }
        }
      )
  }, [])

  const animEnter = (url, e) => {
    gsap.to(
      gradient.current,
      {
        duration: TIME_TRANSITION * 3,
        backgroundPositionX: '-440px'
      }
    )
    gsap.to(
      gradient.current,
      {
        duration: TIME_TRANSITION * 3,
        ease: 'power3.out',
        backgroundPositionX: '0'
      }
    )
    gsap.to(
      gradient.current,
      {
        duration: TIME_TRANSITION * 3,
        ease: 'power3.out',
        backgroundPositionX: '-440px'
      }
    )
    e?.preventDefault()
    setIsLoaded(false)
    gsap.to(
      gradient.current,
      {
        onStart: () => tlLogo.play(),
        alpha: 1,
        delay: 0.2,
        duration: TIME_TRANSITION
      }
    )
    gsap.fromTo(
      loadingWrapper.current,
      {
        bottom: '100%',
        top: 0
      }, {
        duration: TIME_TRANSITION,
        ease: 'power3.out',
        onComplete: () => url && navigate(url),
        bottom: '0%'
      }
    )
  }

  const animLeave = (url) => {
    gsap.fromTo(
      gradient.current,
      {
        alpha: 1
      }, {
        onStart: () => router.push(url),
        delay: 0.1,
        duration: TIME_TRANSITION / 2,
        alpha: 0
      }
    )

    gsap.to(
      logo.current.children,
      {
        onStart: () => setLoadAnimations(true),
        duration: TIME_TRANSITION,
        delay: 0.1,
        y: 100,
        ease: 'power3.out',
        stagger: {
          amount: 0.08
        }
      }
    )

    gsap.fromTo(
      loadingWrapper.current,
      {
        top: 0
      }, {
        duration: TIME_TRANSITION / 2,
        delay: TIME_TRANSITION / 2,
        top: '100%',
        ease: 'power3.out',
        onComplete: () => {
          setIsLoaded(true)
          setLoadAnimations(false)
        }
      }
    )
  }

  const navigate = (url) => {
    router.prefetch(url).then(
      () => setTimeout(() => animLeave(url), 2000)
    )
  }

  useEffect(() => {
    if (!isLoaded) {
      document.querySelector('#__next').classList.add('loading')
    } else {
      document.querySelector('#__next').classList.remove('loading')
    }
  }, [isLoaded])

  return (
    <Provider
      value={{
        navigate: animEnter,
        loadAnimations
      }}>
      <div className={`loading-wrapper ${isLoaded ? 'no-pointable' : ''}`} ref={loadingWrapper}>

      <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 214.24 71.81"
      style={{ position: 'absolute' }}
    >
      <clipPath id="mask" ref={logo}>
      <path d="M35.21,15.7c2.54,0,4.79,0.42,6.73,1.26c1.94,0.84,3.56,1.99,4.86,3.46 c1.3,1.46,2.28,3.18,2.95,5.15c0.67,1.97,1.01,4.08,1.01,6.34c0,3.22-0.53,6.25-1.58,9.11c-1.06,2.86-2.53,5.34-4.43,7.45c-1.9,2.11-4.13,3.79-6.7,5.04c-2.57,1.25-5.36,1.87-8.39,1.87c-1.87,0-3.74-0.35-5.62-1.04c-1.87-0.7-3.27-1.67-4.18-2.92h-0.14l-3.67,20.3H0l9.79-55.15h15.26l-0.72,4.1h0.14c1.25-1.54,2.81-2.75,4.68-3.64C31.03,16.14,33.05,15.7,35.21,15.7z M35.06,34.06c0-1.54-0.49-2.83-1.48-3.89c-0.98-1.06-2.41-1.58-4.28-1.58c-1.1,0-2.1,0.23-2.99,0.68c-0.89,0.46-1.66,1.06-2.3,1.8c-0.65,0.75-1.15,1.62-1.51,2.63c-0.36,1.01-0.54,2.06-0.54,3.17c0,1.58,0.49,2.89,1.48,3.92c0.98,1.03,2.39,1.55,4.21,1.55c1.15,0,2.18-0.22,3.1-0.65c0.91-0.43,1.69-1.03,2.34-1.8c0.65-0.77,1.14-1.64,1.48-2.63C34.9,36.28,35.06,35.21,35.06,34.06z"/>
      <path d="M56.7,20.45c0.22-1.44,0.37-2.74,0.47-3.89h15.48c0,0.24-0.02,0.55-0.07,0.94c-0.05,0.38-0.11,0.8-0.18,1.26c-0.07,0.46-0.14,0.9-0.22,1.33c-0.07,0.43-0.13,0.79-0.18,1.08h0.22c1.1-1.54,2.45-2.82,4.03-3.85c1.58-1.03,3.46-1.55,5.62-1.55c1.3,0,2.3,0.12,3.02,0.36l-3.02,13.68c-0.48-0.14-1.03-0.24-1.66-0.29c-0.62-0.05-1.2-0.07-1.73-0.07c-2.5,0-4.44,0.66-5.83,1.98c-1.39,1.32-2.26,2.87-2.59,4.64l-3.24,18.36H50.69l5.4-30.46C56.28,23.06,56.48,21.89,56.7,20.45z"/>
      <path d="M86.22,20.45c0.22-1.44,0.37-2.74,0.47-3.89h15.48c0,0.24-0.02,0.55-0.07,0.94c-0.05,0.38-0.11,0.8-0.18,1.26c-0.07,0.46-0.14,0.9-0.22,1.33c-0.07,0.43-0.13,0.79-0.18,1.08h0.22c1.1-1.54,2.45-2.82,4.03-3.85c1.58-1.03,3.46-1.55,5.62-1.55c1.3,0,2.3,0.12,3.02,0.36l-3.02,13.68c-0.48-0.14-1.03-0.24-1.66-0.29c-0.62-0.05-1.2-0.07-1.73-0.07c-2.5,0-4.44,0.66-5.83,1.98c-1.39,1.32-2.26,2.87-2.59,4.64l-3.24,18.36H80.21l5.4-30.46C85.8,23.06,86,21.89,86.22,20.45z"/>
      <path d="M115.74,20.45c0.22-1.44,0.37-2.74,0.47-3.89h15.48c0,0.24-0.02,0.55-0.07,0.94c-0.05,0.38-0.11,0.8-0.18,1.26c-0.07,0.46-0.14,0.9-0.22,1.33c-0.07,0.43-0.13,0.79-0.18,1.08h0.22c1.1-1.54,2.45-2.82,4.03-3.85c1.58-1.03,3.46-1.55,5.62-1.55c1.3,0,2.3,0.12,3.02,0.36l-3.02,13.68c-0.48-0.14-1.03-0.24-1.66-0.29c-0.62-0.05-1.2-0.07-1.73-0.07c-2.5,0-4.44,0.66-5.83,1.98c-1.39,1.32-2.26,2.87-2.59,4.64l-3.24,18.36h-16.13l5.4-30.46C115.32,23.06,115.52,21.89,115.74,20.45z"/>
      <path d="M167.76,30.46c-0.34-0.48-0.92-0.94-1.76-1.37c-0.84-0.43-1.86-0.65-3.06-0.65c-2.45,0-4.39,0.79-5.83,2.38c-1.44,1.58-2.16,3.48-2.16,5.69c0,1.44,0.49,2.72,1.48,3.85c0.98,1.13,2.53,1.69,4.64,1.69c1.2,0,2.29-0.23,3.28-0.68c0.98-0.46,1.74-0.95,2.27-1.48l6.41,10.87c-1.92,1.54-4.09,2.72-6.52,3.56c-2.42,0.84-5.22,1.26-8.39,1.26c-2.78,0-5.33-0.4-7.63-1.19c-2.3-0.79-4.27-1.93-5.9-3.42c-1.63-1.49-2.89-3.26-3.78-5.33c-0.89-2.06-1.33-4.39-1.33-6.98c0-3.12,0.56-6.08,1.69-8.89c1.13-2.81,2.72-5.28,4.79-7.42c2.06-2.13,4.54-3.83,7.42-5.08c2.88-1.25,6.05-1.87,9.5-1.87c2.88,0,5.59,0.42,8.14,1.26c2.54,0.84,4.51,2.1,5.9,3.78L167.76,30.46z"/>
      <path d="M172.51,54.43L182.08,0h16.49L189,54.43H172.51z"/>
      <path d="M204.62,55.3c-1.34,0-2.56-0.21-3.64-0.61s-1.99-0.97-2.74-1.69c-0.75-0.72-1.32-1.54-1.73-2.45c-0.41-0.91-0.61-1.87-0.61-2.88c0-1.39,0.24-2.7,0.72-3.92c0.48-1.22,1.16-2.29,2.05-3.2c0.89-0.91,1.94-1.63,3.17-2.16c1.22-0.53,2.58-0.79,4.07-0.79c1.3,0,2.47,0.2,3.53,0.61c1.05,0.41,1.96,0.97,2.7,1.69s1.33,1.54,1.76,2.45c0.43,0.91,0.65,1.87,0.65,2.88c0,1.39-0.24,2.7-0.72,3.92c-0.48,1.22-1.15,2.29-2.02,3.2c-0.86,0.91-1.91,1.63-3.13,2.16C207.46,55.03,206.11,55.3,204.62,55.3z"/>
      </clipPath>
    </svg>
        <div
          ref={gradient}
          className="gradient" />
      </div>
      {children}
    </Provider>
  )
}
