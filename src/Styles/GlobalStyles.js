import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
    ${reset}
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700');
    * {
        box-sizing: border-box;
    }
    html,
    body,
    #root {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    font-family:'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
            background-color: #ecf0f1;
    }
    a {
        text-decoration: none;
    }
    input:focus{
         outline:none;
    }
`;
