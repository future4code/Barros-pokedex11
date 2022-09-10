import styled from "styled-components";

export const PokedexMain = styled.div`
    width: 100%;
    height: 90%;
    background: black;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    overflow-y: auto;
`

export const PokeCardBase = styled.div`
    width: 200px;
    height: 300px;
    border-radius: 10px;
    margin: 5px 20px;
    text-align: center;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    flex-wrap: wrap;
    box-shadow: -9px 10px 11px -1px rgba(0,0,0,0.39);
    -webkit-box-shadow: -9px 10px 11px -1px rgba(0,0,0,0.39);
    -moz-box-shadow: -9px 10px 11px -1px rgba(0,0,0,0.39);
    background: rgba(255,255,255, 0.1);
`;

export const NameCard = styled.div`
    width: 100%;
    height: 15%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
`
export const ImageCard = styled.div`
    width: 100%;
    height: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        width: 70%;
        height: 100%;
    }
`
export const ButtonCard = styled.div`
    width: 100%;
    height: 15%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    img{
        width: 30px;
        height: 30px;
        :hover{
            transition: .5s;
            transform: scale(1.2);
            cursor: pointer;
        }
    }
`
