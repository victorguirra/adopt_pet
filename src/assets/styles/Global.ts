import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin:0;
        padding:0;
        box-sizing:border-box;

        font-family:'Poppins', sans-serif;
    }

    button {
        border:none;
        cursor:pointer;
    }

    button, input, textarea, select, option {
        outline:none;
    }

    select {
        background-color:transparent;
    }
`;