import styled from '@emotion/styled'
import { COLORS_ARRAY } from 'styles'

const GRAYS = ['#ccc', '#808080', '#434343']

export const Download = styled.div`
  outline: none;
  border: 0;
  border-radius: 50%;
  position: absolute;
  background: ${COLORS_ARRAY[1]};
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  top:0;
  transition:all .5s cubic-bezier(.77,0,.175,1);
  justify-content: center;
  &:hover{
    top: 5px;
    transition:all .5s cubic-bezier(.77,0,.175,1);

  }
  &:after{
    content: '➜';
    transform: rotate(90deg);
    position: absolute;
    margin-left: 2px;
  }
`

export const WrapperCv = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
`
export const Year = styled.article`
  height: ${({ total }) => 100 / total}%;
  width: 100%;
  position: relative;
    &:hover {
      &:before{
        background: ${({ index }) => COLORS_ARRAY[index]}
      }
    }
  &:before{
    transition:all .5s cubic-bezier(.77,0,.175,1);
    content: '';
    height: 100%;
    width: 4px;
    position: absolute;
    left: 50%;
    background: ${({ index }) => GRAYS[index]};
    transform: translateX(-50%);
  }
  &:not(:last-of-type):after {
    content: '';
    width: 20px;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    background: black;
    height: 2px;
  }

  .year {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    background: white;
    padding: 5px;
    border-radius: 5px;
    z-index: 16;
    box-shadow:0px 0px 20px rgba(0,0,0,.3) ;
  }
`

export default function getStart (since, fromDate) {
  const now = new Date(new Date().getFullYear(), 11, 31).getTime() - since
  const from = new Date(fromDate).getTime() - since

  return from * 100 / now
}
