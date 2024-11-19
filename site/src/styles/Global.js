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
    }
    :root{
        --primary: #ddefdd;
        --primary_constrat: #efddef;
        --secondary: #545f48;

        --gray: #ccd5cc;
        --blue: #52cfdf;
        --white: #e8ffe8;
        --black: #344f38;

        --border-size: 1px;
        --border-color: #004f004f;
        --border-radius: 4px;

        --height_header: 75px;
    }

    body{
        background-Color: var(--white);
        color: var(--secondary);
        font-family: "PT Serif", serif;
        font-size: 1.2rem;
        font-weight: 400;
    }
    ul{list-style-type: none;}
    a{text-decoration: none;}
`;