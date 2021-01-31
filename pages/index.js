import Salut from 'components/app/home/salut'
import useAnimation from 'components/hooks/useAnimation'
import useLoading from 'components/hooks/useLoading'

const animation = {
  y: 265,
  ease: 'power4.out',
  skewY: 12,
  delay: 0.3,
  stagger: {
    amount: 0.4
  }
}
export default function Home () {
  const { loadAnimations } = useLoading()
  const { ref } = useAnimation({ onEnter: true, animation, duration: 1.8, childOfChilds: true, loadAnimations })
  const { ref: ref2 } = useAnimation({ onEnter: true, animation: { ...animation, alpha: 0 }, duration: 1.8, childOfChilds: true, loadAnimations })
  return (
    <>
    <main>
      <section className="header-content">
        <div className="salut-anim">
          <Salut />
        </div>
       <h1 ref={ref}>
         <div className="line">
          <span>
          he
          </span>
         </div>
         <div className="line">
          <span>
          llo.
          </span>
         </div>
        </h1>
        <div className="description" ref={ref2}>
          <div className="line paragraph">
            <span>
            My name is Adri,
            </span>
          </div>
          <div className="line paragraph">
            <span>
            I am front end developer.
            </span>
          </div>
          <div className="line paragraph">
          <span>
          welcome to my... site?
          </span>
          </div>
        </div>
      </section>
    </main>
    <style jsx>{`
    main{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
    }
    .header-content {
      position: relative;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 100%;
      justify-content: center;
    }
    h1 {
      margin: 80px 0 30px;
      font-size: 15em;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 360px;
      height: 380px;
    }
    .line {
      position: relative;
      overflow: hidden;
      width: 100%;
      height: 182px;
    }
    .line > span {
      margin-top: -53px;
    }
    .description {
      font-size: 2em;
      width: 100%;
    }
    .paragraph {
      height: 56px;
      display: flex;
      justify-content: center;
    }
    .paragraph > span {
      margin-top: 0;
    }
    span {
      position: absolute;
    }
    .salut-anim {
      display: flex;
      position:relative;
      z-index: 15;
      justify-content: center;
    }
    @media (min-width: 780px) {
      h1 {
        font-size: 18em;
        height: 500px;
        margin-bottom: 100px;
        margin-top: 50px;
      }
      .header-content {
        width: 50%;
      }
      .description {
        font-size: 3em;
        width: 100%;
      }
      .line:not(.paragraph) {
        height: 282px;
      }
    }
    `}</style>
    </>
  )
}
