import styled from "styled-components";

export const CardPok = styled.div`
    width: 200px;
    height: 300px;
    background: yellow;
    border-radius: 10px;
    margin: 5px 20px;
    text-align: center;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    flex-wrap: wrap;
    
`

export const NameCard = styled.div`
    width: 100%;
    height: 15%;
    /* background: red; */
    display: flex;
    justify-content: center;
    align-items: center;
`
export const ImageCard = styled.div`
    width: 100%;
    height: 70%;
    /* background: blue; */
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
    /* background: green; */
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    img{
        width: 40px;
        height: 40px;
        :hover{
            transition: .5s;
            transform: scale(1.2);
            cursor: pointer;
        }
    }
`