import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
  *,
  *:before,
  *:after {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
     box-sizing: border-box;
  }
  
  html {
    font-size: 62.5%;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  
  body {
    margin: 0;
    background: #343a40;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    color: #fff;
    font-size: 14px;
    line-height: 1.428571429;
  }
  svg{
     width: 22px;
    height: 18px;
  }
`

