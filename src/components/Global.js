import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Oswald', sans-serif;
    }
`

export const AppContainer = styled.div`
    max-width: 100vw;
    width: 100%;
    overflow-x: hidden;
    padding-bottom: 2%;

    @media screen and (max-width: 560px) {
        padding-left: 0;
    }

`