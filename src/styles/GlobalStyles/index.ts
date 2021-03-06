import { createGlobalStyle } from 'styled-components';
import { fontFamily } from '../fonts/index';
import { primaryColor } from 'styles/theme';

const GlobalStyle = createGlobalStyle`
  html{
    height:100%
  }
  body{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: ${fontFamily};
    margin:0;
    box-sizing:border-box;
    background-color: ${primaryColor}
  }
`;

export default GlobalStyle;