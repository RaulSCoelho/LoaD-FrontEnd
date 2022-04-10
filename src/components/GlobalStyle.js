import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
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

.toggleVideo{
  width: 72px;
  height: 72px;
  background-color: black;
  border-radius: 50%;
  border: 2px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.currentVideoDiv{
  width: 80%;
}

.nextVideos{
  border-top: 1px solid #444;
  padding-top: 30px;
  width: 90%;
}

.thumb{
  width: 300px;
  cursor: pointer;
  transition: 350ms;

  &:hover{
    width: 400px;
  }
}

h1.thumb{
  height: 27.3px;
}
`