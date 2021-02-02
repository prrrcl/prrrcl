import styled from '@emotion/styled'
import gsap from 'gsap'
import { random } from 'lodash'
import { useEffect, useState, useRef } from 'react'

import { COLORS_ARRAY } from 'styles'
import { getStart } from './comps'

const WorkWrapper = styled.div`
  background: ${({ data }) => data.color || COLORS_ARRAY[random(0, COLORS_ARRAY.length - 1)]};
  position: absolute;
  left: ${({ data, from }) => getStart(from, data.startAt)}%;
  width: ${({ data, from }) => getStart(from, data.endAt || new Date()) - getStart(from, data.startAt)}%;
  padding: 15px;
  top:${({ from, data }) => getStart(from, data.startAt)}%  ;
  border-radius: 10px;
  font-weight: bold;
  overflow: hidden;
  ul {
      overflow: hidden;
    }
  
    h3{
     margin: 0; 
     white-space: nowrap;
    }
`

const Work = ({ data, from, total, index }) => {
  const listRef = useRef()
  const containerRef = useRef()
  const [isOpen, setIsOpen] = useState(false)
  const handleOpen = (e) => {
    setIsOpen(true)
  }

  const handleClose = e => {
    setIsOpen(false)
  }

  useEffect(() => {
    if (data.description) {
      if (!isOpen) {
        gsap.to(
          containerRef.current,
          {
            height: 52,
            width: `${getStart(from, data.endAt ?? new Date()) - getStart(from, data.startAt)}%`,
            delay: 0.4,
            zIndex: 0
          }
        )
        gsap.to(
          listRef.current.children,
          {
            y: -10,
            opacity: 0,
            ease: 'power3.inOut',
            stagger: {
              amount: 0.2
            }
          }
        )
      } else {
        gsap.to(
          containerRef.current,
          {
            height: 50 * (data.description.length > 1 ? data.description.length : data.description.length + 1),
            width: `${getStart(from, new Date('12-31-2021')) - getStart(from, data.startAt)}%`,
            zIndex: 999
          }
        )
        gsap.to(
          listRef.current.children,
          {
            y: 0,
            opacity: 1,
            ease: 'power3.inOut',
            stagger: {
              amount: 0.2
            }
          }
        )
      }
    }
  }, [isOpen])

  return (
    <WorkWrapper ref={containerRef} data={data} from={from} total={total} index={index} onMouseEnter={handleOpen} onMouseLeave={handleClose}>
      <h3>
        {data.name}
      </h3>
      {data.description &&
      <ul ref={listRef}>
        {data.description.map(d => (
          <li key={d}>
            {d}
          </li>
        ))}
        </ul>
      }
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
      height: 100%;
    }
    `}</style>
    </>
  )
}
