import styled from "styled-components";

export const Container = styled.div`
    padding: 25px 150px;
    height: 76px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: var(--border-size) solid var(--border-color);
    background-color: var(--white);

`;

export const Logo = styled.div`
    img {
        position: fixed;
        height: 64px; 
        border-radius: var(--border-radius);
        display: flex;
        justify-content: space-between;
        align-items: center;
        left: 0%;
        top: 0%;
        margin-left: 1%;
        margin-top: 0.5%;
        border-radius: 25%;
        border: var(--border-size); 
    }
`;

export const Menu = styled.div`
    ul{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    li{
        margin: 5px;
        padding: 5px;
        border: var(--border-size) solid var(--border-color);
        border-radius: var(--border-radius);
    }

`