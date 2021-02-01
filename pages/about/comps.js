import styled from '@emotion/styled'

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const BioWrapper = styled.article`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-wrap: wrap;
   img {
    width: 100%;
    height: 320px;
    object-fit: cover;
   }
   & > div {
     width: 100%;
   }
   h2 {
     font-size: 5em;
     position: relative;
     display: flex;
     flex-direction: column;
     width: 100%;
     height: 165px;
     margin: -40px 0 50px;
     span {
       position: absolute;
       &:nth-child(2) {
         top: 40px;
         left: 0px;
         font-size: 8rem;
       }
     }
   }
   p {
     margin: 0;
     font-size: 3em;
     display: flex;
     flex-direction: column;
   }
   @media (min-width: 768px) {
    align-items: flex-end;
    & > div {
     width: 50%;
   }
   img {
    max-height: 800px;
     height: 100%;
     object-fit: none;
     width: 50%;
   }
   h2 {
    font-size: 10em;
    line-height: 100px;
    margin: 0 0 0 -100px;
    width: 450px;
    height: 225px;
    span {
       position: absolute;
       &:nth-child(2) {
         top: 90px;
         left: 50px;
         font-size: 10rem;
       }
     }
   }
   
   p {
    margin: 0 0 0 50px;

   }
   }
`
