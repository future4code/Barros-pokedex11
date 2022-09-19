import styled from "styled-components";

export const CardPok = styled.div`
    width: 150px;
    height: 250px;
    border-radius: 10px;
    margin: 10px 20px;
    text-align: center;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    flex-wrap: wrap;
    box-shadow: -9px 10px 11px -1px rgba(0,0,0,0.39);
    -webkit-box-shadow: -9px 10px 11px -1px rgba(0,0,0,0.39);
    -moz-box-shadow: -9px 10px 11px -1px rgba(0,0,0,0.39);
    background: rgba(255,255,255, 0.1);
`

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
        margin-bottom: 10px;
        :hover{
            transition: .5s;
            transform: scale(1.2);
            cursor: pointer;
        }
    }
`