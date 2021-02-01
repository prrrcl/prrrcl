import { useEffect, useMemo, useRef } from 'react'
import { AnswerText, Owner, QuestionItem, QuestionText } from './comps'
import { random } from 'lodash'
import gsap from 'gsap'

const animation = {
  alpha: 0,
  duration: 1,
  ease: 'power3.in'
}

export default function Question ({ data, callback, limits }) {
  const ref = useRef()
  const top = useMemo(() => random(0, limits.height), [limits.width])
  const left = useMemo(() => random(0, limits.width), [limits.width])

  useEffect(() => {
    gsap.from(
      ref.current,
      animation
    )
    setTimeout(() => {
      gsap.to(
        ref.current,
        {
          alpha: 0,
          duration: 1,
          onComplete: () => callback()
        }
      )
    }, 15000)
  }, [])

  return (
    <QuestionItem style={{ top, left }} ref={ref}>
      <QuestionText>
        &quot;{data.question}&quot; <small>- {data.name}</small>
      </QuestionText>
      <AnswerText>
        {data.answer}
      </AnswerText>
    </QuestionItem>
  )
}
