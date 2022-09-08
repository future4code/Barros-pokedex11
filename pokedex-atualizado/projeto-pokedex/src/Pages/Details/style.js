import styled from "styled-components";

export const Global = styled.div`
background-color: yellow;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`
export const Container = styled.div`
    display: flex;
    align-items:center ;
    justify-content: center;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`

export const Title = styled.img`
  margin-left: 350px;
  width: 650px;
 
`;

export const DivButtons = styled.div `
    display: flex;
    justify-content: center;
`
export const ButtonLeft = styled.button`
  width: 148px;
  height: 38px;
  margin-top: -113px;
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
  height: 4vh;
  left: none;
  top: 0;
  }
  `

export const ButtonRight = styled.button`
width: 148px;
  height: 38px;
  margin-top: -113px;
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
  margin-left: 80vw;
  position: absolute;
  top: 1;
  left: 0;
  @media(max-width: 540px){
    font-size: 1.2em;
  flex-direction: column;
  height: 4vh;
  left: none;
  top: 0;
  }`

export const ContainerCards = styled.main`
    display: flex;
    align-items: center;
    box-sizing: border-box;
    div{
    padding: 150px 150px;
    padding: 40px 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 15vw;
    }
`

export const CardSection =styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    gap: 50px;
`
export const CardImage = styled.div`
    border: 2px solid;
    border-radius: 120px;
    height: 250px;
    width: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
    background-color: white;
`
export const Images = styled.img`
width: 100px;
`
export const SectStatus = styled.section`
    display: flex;
    flex-direction: column;
    line-height: 50px;
    width: 300px;
    height: 350px;
    border: 2px solid;
    border-radius: 10px;
    background-color: white;
    h1, p {
        padding-left: 20px;
    }
`

export const SectDetails = styled.section`
    display: flex;
    flex-direction: column;
    gap: 25px;
    background-color: white;
    div{
    padding-left: 20px;
    display: flex;
    align-items: center;
    gap: 25px;
    width: 300px;
    height: 50px;
    border: 2px solid;
    border-radius: 10px;

    }
`

export const Move = styled.div`
    width: 300px;
    height: 450px;
    border: 1px solid;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 25px;
    align-items: center;
    overflow-x:auto;
    h5{
        text-align: center;
    font-size: 30px;
    }
    ul{
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 20px;
    }
`