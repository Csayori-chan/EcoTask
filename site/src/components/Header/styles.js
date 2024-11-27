import styled from "styled-components";

export const Container = styled.div`

    padding: 5px;
    height: 76px;
    display: flex;
    justify-content: space-between;
    //background: linear-gradient(45deg, var(--blue), var(--primary)); 
    background: linear-gradient(45deg, var(--primary), var(--tertiary)); 
    align-items: center;
    
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
        margin-left: 5px;
        margin-top: 5px;
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
        border: var(--border-size) solid ;
        border-radius: var(--border-radius);
        background-color: var(--primary);
        color: var(--tertiary);
    }
    span {
        align-self: center;
    }
    

`;
