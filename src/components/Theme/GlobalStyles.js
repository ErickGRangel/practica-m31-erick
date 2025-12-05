import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    min-height: 100vh;
    box-sizing: border-box;
    font-family: ${props => props.theme.fonts.main};
    background: linear-gradient(to bottom, #000000, ${props => props.theme.colors.primary});
    }
`;

export default GlobalStyles;