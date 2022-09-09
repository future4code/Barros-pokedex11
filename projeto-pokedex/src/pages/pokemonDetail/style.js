import styled from "styled-components"; 

export const PokemonDetailMain = styled.div`
    width: 100%;
    height: 90%;
    background: blue;
    display: flex;
`

export const ImagemCamp = styled.div`
    width: 33%;
    height: 100%;
    background: grey;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img{
        width: 300px;
        height: 300px;
    }
`

export const StatsCamp = styled.div`
    width: 33%;
    height: 100%;
    background: red;
    text-align: center;
    div{
        display: flex;
        justify-content: center;
    }
    
        div{
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            label{
                font-weight: bold;
                font-size: 23px;
            }
            p{
                font-size: 20px;
            }
        }
    
`

export const TypeMoveCamp = styled.div`
    width: 33%;
    height: 100%;
    background: yellow;
    display: flex;
    flex-direction: column;
`

export const TypesCamp = styled.div`
    width: 100%;
    height: 10%;
    background: crimson;
    display: flex;
    justify-content: space-around;
    div{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        label{
            font-size: 20px;
            font-weight: bold;
            margin: 0 15px;
        }
        p{
            font-size: 17px;
        }
    }
`

export const MovesCamp = styled.div`
    width: 100%;
    height: 90%;
    background: orangered;
    display: flex;
    align-items: center;
    flex-direction: column;
    h2{
        font-size: 25px;
    }
    p{
        font-size: 17px;
    }
`