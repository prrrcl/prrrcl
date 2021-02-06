import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import useLoading from 'components/hooks/useLoading'
import gsap from 'gsap'
import { random } from 'lodash'
import { useEffect, useRef, useState } from 'react'

import { COLORS_ARRAY } from 'styles'
import getStart from './comps'
const bgAnim = keyframes`
  0% {
    background-position-x:-400px;
  }
  50% {
    background-position-x: 0px;
  }
  100% {
    background-position-x: -400px;
  }
`
const WorkWrapper = styled.div`
  position: absolute;
  min-height: 50px;
  cursor: pointer;
  @media (min-width: 768px){
    width: 20%;
  }
  left: 0;
  width: 100%;
  padding: 15px;
  border-radius: 10px;
  font-weight: bold;
  overflow: hidden;
  &:after{
    position:absolute;
    background: rgb(255,209,49);
    background: linear-gradient(
    90deg,
    rgba(255,209,49,1) 0%, 
    rgba(255,160,90,1) 17%,
    rgba(255,114,147,1) 32%, 
    rgba(251,113,190,1) 48%,
    rgba(190,126,255,1) 65%,
    rgba(43,172,255,1) 83%,
    rgba(0,243,215,1) 100%
    );
    background-size: 300%;
    content: '';
    width: 100%;
    height:100%;
    top: 0;
    left:  0;
    animation: 10s ${bgAnim} infinite;
    filter: blur(1ae0px);
    mix-blend-mode: soft-light;
  }
  ul {
      overflow: hidden;
    }
  
    h3{
     margin: 0; 
    }
`
export const Work = ({ data, from, total, index }) => {
  const ref = useRef()
  const descRef = useRef()
  const [opened, setOpened] = useState(false)
  const [isMobile] = useState(window.innerWidth <= 800)
  const { loadAnimations } = useLoading()

  useEffect(() => {
    if (loadAnimations) {
      gsap.set(
        ref.current,
        {
          background: `${data.color || COLORS_ARRAY[random(0, COLORS_ARRAY.length - 1)]}`,
          height: `${getStart(from, data.endAt || new Date()) - getStart(from, data.startAt)}%`,
          left: isMobile ? 0 : `${random(0, 80)}%`,
          top: `${getStart(from, data.startAt)}%`,
          zIndex: isMobile ? -1 : 1
        }
      )
      gsap.from(
        ref.current,
        {
          y: -50,
          opacity: 0,
          delay: random(0, 1, true)
        }
      )
    }
  }, [loadAnimations])

  useEffect(() => {
    if (opened) {
      gsap.to(
        ref.current,
        {
          height: 80 + descRef.current.clientHeight,
          ease: 'power3.inOut',
          duration: 0.5,
          zIndex: 120
        }
      )
      gsap.to(
        descRef.current.children,
        {
          y: 0,
          alpha: 1,
          ease: 'power3.inOut',
          duration: 0.5,
          stagger: {
            amount: 0.3
          }
        }
      )
    } else {
      gsap.to(
        descRef.current.children,
        {
          y: -10,
          alpha: 0,
          ease: 'power3.inOut',
          duration: 0.5,
          stagger: {
            amount: 0.2
          }
        }
      )
      gsap.to(
        ref.current,
        {
          delay: 0.3,
          height: `${getStart(from, data.endAt || new Date()) - getStart(from, data.startAt)}%`,
          ease: 'power3.inOut',
          duration: 0.5,
          zIndex: isMobile ? -1 : 1
        }
      )
    }
  }, [opened])

  return (
    <WorkWrapper ref={ref} onClick={() => setOpened(!opened)}>
      <h3>
        {data.name}
      </h3>
      <ul ref={descRef}>
        {data.description.map((desc, i) => (
          <li key={i}>{desc}</li>
        ))}
      </ul>
    </WorkWrapper>
  )
}

export default function Works ({ data, date }) {
  return (
    <>
    <div className="container">
      {data?.map((w, i) => (
    <Work key={w.name} data={w} total={data.length} index={i} from={date} />
      )) || 'loading...'}
    </div>
    <style jsx>{`
    .container {
      position: relative;
      margin: 30px 0;
      width: 100%;
    }
    `}</style>
    </>
  )
}
