import { createGlobalStyle } from 'styled-components'

export const cores = {
  pinkColor: '#E66767',
  footerBackground: '#FFEBD9',
  backgroundColor: '#FFF8F2'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body {
    background-color: ${cores.backgroundColor};
    color: ${cores.pinkColor};
  }
  
  .container{
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
}
  `
