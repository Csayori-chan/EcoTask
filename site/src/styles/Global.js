import { createGlobalStyle } from "styled-components";

// aqui ficará todos os estilos globais
//               ||
//               ||
//              \||/
//               \/
export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        justify-content: center;
    }
    :root{
        --primary: #a6ed6d;
        --secondary: #4c9c67;
        --tertiary: #144237;

        --gray: #ccd5cc;
        --blue: #52cfdf;
        --white: #e8ffe8;

        --border-radius: 4px;
    }

    body{
        background-Color: var(--tertiary);
        color: var(--secondary);
        font-family: "PT Serif", serif;
        font-size: 1.15rem;
        font-weight: 400;
    }
    ul{list-style-type: none;}
    a{text-decoration: none;}
`;