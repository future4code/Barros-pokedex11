import styled from "styled-components";

export const TittleCamp = styled.div`
    width: 100%;
    height: 10%;
    background: black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    img{
        position: relative;
        top: 5px;
        margin: 0 40px;
        width: 40px;
        height: 40px;
        :hover{
            transition: .4s ease-in-out;
            transform: scale(1.1);
            cursor: pointer;
        }
    }
    h1{
        position: relative;
        left: 150px;
    }
    `