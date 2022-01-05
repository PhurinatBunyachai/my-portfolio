 
import {createGlobalStyle} from 'styled-components';
const GlobalStyle = createGlobalStyle`
    @font-face {
      font-family: 'Nunito';
      src: url(/fonts/Nunito-Regular.ttf) ;
    }

    html,body , #root{
      width: 100%;
      height: 100%;
      margin : 0;
      padding : 0;
      font-family: Nunito;
      background-color: #FFFFFF ;
    }
    
`
export default GlobalStyle;