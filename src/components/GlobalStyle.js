import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scrollbar-width: none;
}

html {
  overflow-x: hidden;
  -ms-overflow-style: none;
}

body {
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

#root{
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.93),  rgba(0, 0, 0, 0.93));
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
}

.currentVideoDiv{
  width: 80%;
}

.currentVideo{
  @media (max-width: 1245px){
    width: calc(100vw - 180px);
    height: calc(calc(100vw - 180px) * 0.5625);
  }
  @media (max-width: 750px){
    min-width: 100vw;
    min-height: calc(100vw * 0.5625);
  }
}

.nextVideos{
  border-top: 1px solid #444;
  padding-top: 30px;
  width: 90%;
  overflow: hidden;
}

.nextVideosRow{
  transition: 200ms;
  overflow-x: scroll;
}

.thumbs:hover .thumb {
  max-width: unset;
  width: 400px;
}

.thumb{
  width: 282px;
  cursor: pointer;
  padding: 0px 20px 0px 0px;
  transition: 350ms;
}

h1.thumb{
  max-width: 282px;
  height: 27.3px;
}
`