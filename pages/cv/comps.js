import styled from '@emotion/styled'
import { COLORS_ARRAY } from 'styles'

export const WrapperCv = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`
export const Year = styled.article`
  width: ${({ total }) => 100 / total}%;
  height: 100%;
  position: relative;
  &:before{
    content: '';
    width: 100%;
    height: 4px;
    position: absolute;
    top: 50%;
    background: ${({ index }) => COLORS_ARRAY[index]};
    transform: translateY(-50%);
  }
  &:not(:last-of-type):after {
    content: '';
    height: 20px;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    background: black;
    width: 2px;
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

export const getStart = (since, fromDate) => {
  const now = new Date(new Date().getFullYear(), 11, 31).getTime() - since
  const from = new Date(fromDate).getTime() - since

  return from * 100 / now
}
