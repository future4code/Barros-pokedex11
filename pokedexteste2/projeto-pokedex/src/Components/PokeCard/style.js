import styled from 'styled-components'

export const DivCard = styled.div`
    display: flex;
    width: 250px;
    height: 300px;
    background-color: white;
    box-shadow: 4px 4px 5px blue;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin: auto;
    margin-top: 10px;
    border: 50px;
    border-radius:10px;
    margin-bottom:20px;
`
export const Imagem = styled.img`
    margin: auto;
    font-weight: lighter;
    width: 60%;
`

export const DivButtons = styled.div `
    display: flex;
    justify-content: center;
`

export const ButtonLeft = styled.button`
    width: 100px;
    height: 30px;
    background-color: white;
    border-radius: 10px;
    border:none;
    outline: none;
    color: black;
    box-shadow: 1px 1px 1px #666;
    margin:5px 10px; 
    :hover{
        background-color: blue;
        color: white;
    }
    :active{
        box-shadow: none;
    }
`
export const ButtonRight = styled(ButtonLeft)`
   
`
export const PokeName = styled.h1 `
    font-size: 1.2em;
    color: #000000 ;
`
