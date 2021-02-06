import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'

const BgAnim = keyframes`
  0% {
    background-position: 0% center;
  }
  50% {
    background-position: 100% center;
  }
  100% {
    background-position: 0% center;
  }
`

export const QuestionsWrapper = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items:center;
  justify-content: center;
  overflow: hidden;
  @media (min-width: 768px) {
    min-height: 800px;

  }
`
export const Form = styled.form`
position: relative;
width: 100%;
max-width: 800px;

&:before{
  content: '';
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 13;
  filter: blur(50px);
  animation: ${BgAnim} 20s infinite;
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
}

`

export const Label = styled.label`
text-align: center;
z-index: 14;
position: relative;
display: flex;
flex-direction: column;
width: 100%;
`

export const Input = styled.input`
  outline: none;
  border: 0;
  width: 100%;
  text-align: center;
  background: transparent;
  margin-bottom: 30px;
  font-size: 1.5em;
  @media (min-width: 768x) {
  font-size: 2.5em;
  &.anon {
    font-size: 1.8em;
  }
  }
  &.anon {
    font-size: 1em;
  }
`

export const InputWrapper = styled.div`
position: relative;
width: 100%;
z-index: 15;
padding: 10px 10px 30px;
background: white;
overflow: hidden;
display: flex;
flex-direction: column;
align-items: center;
@media (min-width: 768px) {
  border-radius: 20px;

}

&:after {
    content: '';
    position: absolute;
    left: 0;
    z-index: 16;
    bottom: 0px;
    width: 100%;
    left: 50%;
    transform: translateX(-50%);
    height: 15px;
    animation: ${BgAnim} 20s infinite;
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
  }
`
export const QuestionItem = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 10px;
  background: rgba(0,0,0,.05);
  max-width: 450px;
  small {
    color: rgba(0,0,0, .4);
  }
`
export const QuestionText = styled.div`
  padding: 10px;
  font-style: oblique;
  border-bottom: 1px solid #ccc;
  color: rgba(0,0,0,.7);
`
export const AnswerText = styled.div`
  padding: 10px;
`
export const Button = styled.button`
  outline: none;
  border: 0;
  font-weight: bold;
  color: white;
  font-size: 1.5em;
  padding: 10px 25px;
  border-radius: 20px;
  cursor: pointer;
  animation: ${BgAnim} 20s infinite;
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
`
export const QuestionMobile = styled.div`
padding: 0 15px;
h3 {
  margin: 30px 0;
  text-align: center;
}
& > div {
  margin-bottom: 50px;
}
`
