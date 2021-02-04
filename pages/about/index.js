import BioText from 'components/app/about/bio'
import Questions from 'components/app/about/questions'
import useAnimation from 'components/hooks/useAnimation'
import useLoading from 'components/hooks/useLoading'
import useNearScreen from 'components/hooks/useNearScreen'
import Section, { BioWrapper } from './comps'
const animationTitle = {
  x: 100,
  alpha: 0,
  delay: 0.4,
  ease: 'power3.out',
  stagger: {
    amount: 0.2
  }
}
export default function About () {
  const { loadAnimations } = useLoading()
  const { ref: titleRef } = useAnimation({ loadAnimations, animation: animationTitle })
  const { ref: textRef } = useAnimation({ loadAnimations, animation: animationTitle })
  const { fromRef: isNearRef, isNearScreen } = useNearScreen({ once: false, distance: '-50px' })
  return (
    <Section>
      <BioWrapper>
        <img src="/pequeyo.jpg" />
        <div>
          <h2 ref={titleRef}>
              <span>
                a lil
              </span>
              <span>
                prrrcl
              </span>
          </h2>
          <p ref={textRef}>
            <span>
              Hey!
            </span>
            <span>
              I&apos;m Adri, I am 26 years old,
            </span>
            <span>
              and I&apos;m frontend engineer.
            </span>
          </p>
        </div>
      </BioWrapper>
      <BioText ref={isNearRef} showed={isNearScreen} />
      <Questions />
    </Section>
  )
}
