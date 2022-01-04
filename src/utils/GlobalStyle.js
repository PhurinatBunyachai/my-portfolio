 
import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @font-face {
      font-family: 'Nunito' ;
      src: url('Nunito-Regular.ttf') format('ttf');
      font-weight: 100;
      font-style: normal;
      font-display: swap;
    }

    html,body , #root{
      width: 100%;
      height: 100%;
      margin : 0;
      padding : 0;
      font-family: 'Nunito';
      background-color: #FFFFFF ;
    }
    
`
export default GlobalStyle;