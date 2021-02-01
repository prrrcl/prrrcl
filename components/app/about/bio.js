import { forwardRef, useEffect, useState } from 'react'

import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'
import useAnimation from 'components/hooks/useAnimation'
import useLoading from 'components/hooks/useLoading'

const Wrapper = styled.div`
width: 100%;
margin: 40px 0;
@media (min-width: 768px) {
  margin: 100px 0;
}
h2 {
  font-size: 3em;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: normal;
  margin-bottom: 150px;
  span {
    margin: 20px 0;
    position: absolute;
  }
  .big {
    font-size: 3.5rem;
  }
  .line {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 76px;
    display: flex;
    justify-content: center;
  }
}
`
const anim = keyframes`
0%{
  transform: scale(1)
}
50%{
  transform: scale(1.5)
}
100% {
  transform: scale(1)
}
`

const ImageWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  &:after {
    content: '💖';
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 3em;
    position: absolute;
    animation: ${anim} infinite 5s;
  }
`
const animation = {
  y: 265,
  ease: 'power4.out',
  skewY: 12,
  delay: 0.3,
  stagger: {
    amount: 0.4
  }
}
export default forwardRef(function BioText ({ showed }, ref) {
  const { loadAnimations } = useLoading()
  const [localLoad, setLocalLoad] = useState(false)

  useEffect(() => {
    if (loadAnimations) setLocalLoad(true)
  }, [loadAnimations])

  const { ref: animRef } = useAnimation({ animation: { ...animation, alpha: 0 }, duration: 1.8, loadAnimations: localLoad && showed, childOfChilds: true })

  return (
    <Wrapper ref={ref}>
      <h2 ref={animRef}>
        <div className="line">
          <span>
            <b>Tech</b>, <b>design</b> and <b>frontend</b> geek.
          </span>
        </div>
        <div className="line">
          <span>
          I discovered my passion for the web at the young age of 14.
          </span>
        </div>
        <div className="line">
          <span>
          But it isn&apos;t until 2019 that I couldn&apos;t dedicate myself to it professionally...
          </span>
        </div>
      </h2>
      <ImageWrapper>
        <img src="/myteam.jpg" />
      </ImageWrapper>
    </Wrapper>
  )
})
