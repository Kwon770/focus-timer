import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
    ${reset}
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700');
    * {
        box-sizing: border-box;
    }
    body{
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        background-color: #ecf0f1;
    }
    a {
        text-decoration: none;
    }
    input:focus{
         outline:none;
     }
`;
