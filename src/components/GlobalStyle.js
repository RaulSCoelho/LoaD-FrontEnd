import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
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

*::-webkit-scrollbar {
  width: 13px;
}

*::-webkit-scrollbar-thumb{
  background: white;
  border-radius: 10px;
  border: 3px solid rgb(18, 18, 18);
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
    width: 95vw;
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