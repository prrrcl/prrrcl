import styled from '@emotion/styled'
import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import Link from 'components/elements/link'

const Burguer = styled.div`
  width: 45px;
  height: 45px;
  position:  relative;
`
const MenuWrapper = styled.nav`
  position: fixed;
  top: 50%;
  left: 50%;
  pointer-events: none;
  z-index: 20;
  transform: translate(-50%, -50%);
  &.opened {
    pointer-events: all;
  }

  ul {
    list-style: none;
    padding: 0;
    margin:0;
    display: flex;
    flex-direction: column;
    li {
      color: white;
      opacity: 0;
      margin-bottom: 45px;
      font-size: 2em;
      font-weight: bold;
      text-align: center;
    }
  }
`

export default function Header () {
  const [menuOpened, setMenuOpened] = useState(false)
  const circle = useRef()
  const circleInverted = useRef()
  const menuItems = useRef()
  const { current: tl } = useRef(gsap.timeline({ paused: true }))

  useEffect(() => {
    tl.set(
      circleInverted.current, {
        alpha: 0
      }
    )
    tl.to(
      circle.current,
      {
        transform: 'scale(0.8)',
        duration: 0.2,
        ease: 'power3.in'
      }
    ).to(
      circle.current,
      {
        transform: 'scale(120)',
        duration: 1.2,
        ease: 'power3.inOut'
      }
    )
      .staggerTo(
        menuItems.current.children,
        0.6,
        {
          y: 25,
          alpha: 1,
          ease: 'power3.easeInOut'
        },
        0.1
      )

    tl.to(
      circleInverted.current,
      {
        backgroundColor: 'white',
        alpha: 1,
        ease: 'power3.easeInOut',
        duration: 0.7
      }
    )
  }, [tl, circleInverted, circle])

  const toggleMenu = () => {
    setMenuOpened(old => {
      if (old) {
        tl.reverse()
      } else {
        tl.play()
      }
      return !old
    })
  }

  const navigate = () => {
    setTimeout(() => tl.reverse(-1), 1000)
  }
  const menu = [{
    name: 'home',
    link: '/'
  }, {
    name: 'about',
    link: '/about'
  }, {
    name: 'contact',
    link: 'mailto:adrianporcelnavarro@hotmail.com'
  }, {
    name: 'cv',
    link: '/cv'
  }]

  return (
    <>
    <header>
      <Burguer>
        <span ref={circle}/>
        <span className="burguer" ref={circleInverted} onClick={toggleMenu}/>
      </Burguer>
    </header>
      <MenuWrapper className={menuOpened ? 'opened' : ''}>
        <ul ref={menuItems}>
          {menu.map(item => item.name !== 'contact'
            ? (
            <li key={item.name} onClick={navigate}>
              <Link href={item.link}>
                {item.name}
              </Link>
            </li>
              )
            : (
            <li key={item.name}>
              <a href={item.link}>
                {item.name}
              </a>
            </li>
              ))}
        </ul>
      </MenuWrapper>
    <style jsx>{`
    header {
      padding: 30px 30px 0 0;
      z-index: 20;
      position: fixed;
      top: 0;
      right: 0;
    }
    .opened {
      width: 100%;
      height: 100vh;
    }
    .burguer {
      cursor: pointer;
      pointer-events: all;
    }
    span {
      position: absolute;
      width: 100%;
      height: 100%;
      background: black;
      border-radius: 50%;
      pointer-events: none;
      z-index: 1000;
    }
    `}</style>
    </>
  )
}
