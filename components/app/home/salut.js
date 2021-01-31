import gsap from 'gsap'
import { useEffect, useRef } from 'react'

export default function Salut ({ style }) {
  const { current: tl } = useRef(gsap.timeline({ paused: true, repeat: -1 }))
  const hand = useRef(null)
  useEffect(() => {
    gsap.to(
      hand.current,
      {
        delay: 5,
        transform: 'rotate(-20deg)',
        duration: 0.5
      })

    setTimeout(() => {
      tl.fromTo(
        hand.current,
        {
          transform: 'rotate(-20deg)',
          duration: 0.1
        }, {
          transform: 'rotate(20deg)'
        }
      )
        .fromTo(
          hand.current,
          {
            transform: 'rotate(20deg)',
            duration: 0.2
          },
          {
            transform: 'rotate(-20deg)',
            duration: 0.2
          }
        )
    }, 5000)
  }, [])

  return <>

    <span onMouseMove={() => tl.play()} onMouseLeave={() => tl.pause()} ref={hand}>👋</span>

  <style jsx>{`
  span {
    font-size: 6em;
    position: absolute;
    cursor: default;
  }
 
  `}</style>
  </>
}
