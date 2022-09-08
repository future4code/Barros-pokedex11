import styled from "styled-components"

export const Global = styled.div`
background-color: yellow;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`

export const Container = styled.div`
  display: flex;
  width: 95vw;
  flex-wrap: wrap;
  margin: auto;
  
`

export const Title = styled.img`
  margin-left: 350px;
  width: 650px;
 
`;

export const DivButtons = styled.div `
    display: flex;
    justify-content: center;
`
export const Buttons = styled.button`
  width: 148px;
  height: 38px;
  margin-top: -60px;
  border-radius: 10px;
  cursor: pointer;
  background: transparent;
  border-radius: 1px solid #91C9FF;
  box-shadow: 1px 1px 1px 1px blue;
  outline: none;
  transition: 1s ease-in-out;
  font-size: 18px;
  font-weight: 100;
      
  :hover {
   transition: 1s ease-in-out;
   background: #4F95DA;
  }

  :active {
    box-shadow: none;
  }
  font-size: 1.2em;
  margin-left: 5vw;
  position: absolute;
  top: 1;
  left: 0;
  @media(max-width: 540px){
    font-size: 1.2em;
  flex-direction: column;
  margin-left: 0vw;
  height: 4vh;
  left: none;
  top: 0;
  }
  `