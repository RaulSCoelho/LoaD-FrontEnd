import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: rgb(18, 18, 18);
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
  sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
  monospace;
}

::-webkit-scrollbar{
  display: none;
}

*::selection 
{
  background-color:rgba(0, 0, 0, 0.2);
}

#root{
  background-image: linear-gradient(rgb(173, 173, 173), rgb(18, 18, 18),  rgb(18, 18, 18));
}

.nextVideos{
  border-top: 1px solid #444;
  padding-top: 30px;
  width: 100%;
  overflow: hidden;

  @media (max-width: 920px){
    width: 100vw;
  }
}

.thumbs:hover .thumb {
  max-width: unset;
  width: 400px;
}

.thumb{
  width: 282px;
  padding: 0px 20px 0px 0px;
  cursor: pointer;
  transition: 350ms;
}
`