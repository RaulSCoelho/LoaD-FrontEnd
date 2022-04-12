import React from "react";
import styled from "styled-components"
import { IoChevronForwardOutline as Forward } from "react-icons/io5"

export const ScrollVideosForwardDiv = styled.div`
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

@media (max-width: 750px){
    right: -20px;
}
`

function ScrollVideosForward(props) {
    function slide() {
        const videoDiv = document.querySelector(`#nextVideosRow${props.row}`)
        videoDiv.style = "scroll-behavior: smooth;"
        videoDiv.scrollLeft += 282
    }
    
    var repeater

    function whileMouseEnter(){
        repeater = setInterval(slide, 1000)
    }

    function ifMouseLeave(){
        clearInterval(repeater)
    }

    return (
        <ScrollVideosForwardDiv onClick={slide} onMouseEnter={whileMouseEnter} onMouseLeave={ifMouseLeave} style={{ color: '#757575' }}>
            <Forward className="iconScrollVideosForward" size={'2em'} />
        </ScrollVideosForwardDiv>
    )
}

export default ScrollVideosForward