import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import useAnimation from 'components/hooks/useAnimation'
import useLoading from 'components/hooks/useLoading'
import gsap from 'gsap'
import { random } from 'lodash'
import { useEffect, useState, useRef } from 'react'

import { COLORS_ARRAY } from 'styles'
import { getStart } from './comps'
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
  background: ${({ data }) => data.color || COLORS_ARRAY[random(0, COLORS_ARRAY.length - 1)]};
  position: absolute;

  min-height: 50px;
  height: ${({ data, from }) => getStart(from, data.endAt || new Date()) - getStart(from, data.startAt)}%;
  @media (min-width: 768px){
    left: ${() => random(0, 80)}%;
    width: 20%;
  }
  left: 0;
  width: 100%;
  padding: 15px;
  top:${({ from, data }) => getStart(from, data.startAt)}%  ;
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
    mix-blend-mode: soft-light
  }
  ul {
      overflow: hidden;
    }
  
    h3{
     margin: 0; 
    }
`
export const Work = ({ data, from, total, index }) => {
  return (
    <WorkWrapper data={data} from={from} total={total} index={index}>
      <h3>
        {data.name}
      </h3>
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
