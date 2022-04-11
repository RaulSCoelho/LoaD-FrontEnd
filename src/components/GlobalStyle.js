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
  background-color: rgba(0, 0, 0, 0.75);
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
  overflow: hidden;
}

.nextVideosRow{
  transition: 200ms;
}

.thumbs:hover .thumb {
  width: 400px;
}

.thumb{
  width: 282px;
  cursor: pointer;
  padding: 0px 20px 0px 0px;
  transition: 350ms;
}

h1.thumb{
  height: 27.3px;
}

.scrollVideosForward, .scrollVideosBack{
  position: absolute;
  right: 50px;
  width: 60px;
  height: 60px;
  padding-top: 20px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: 0;
  cursor: pointer;

  &:hover .iconScrollVideosForward{
    height: 3em;
    width: 3em;
    color: #fff;
  }

  &:hover  .iconScrollVideosBack{
    height: 3em;
    width: 3em;
    color: #fff;
  }
}

.scrollVideosBack{
  right: unset;
  left: 50px;
}
`