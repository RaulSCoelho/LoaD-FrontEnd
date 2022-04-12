import React from "react";
import styled from "styled-components"
import { IoChevronBackOutline as Back } from "react-icons/io5"

export const ScrollVideosBackDiv = styled.div`
position: absolute;
left: 50px;
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

&:hover .iconScrollVideosBack{
    height: 3em;
    width: 3em;
    color: #fff;
}

@media (max-width: 750px){
    left: -20px;
}
`

function ScrollVideosBack(props) {
    function slide() {
        const videoDiv = document.querySelector(`#nextVideosRow${props.row}`)
        videoDiv.style = "scroll-behavior: smooth;"
        videoDiv.scrollLeft -= 282
    }

    var repeater
    
    function whileMouseEnter(){
        repeater = setInterval(slide, 1000)
    }

    function ifMouseLeave(){
        clearInterval(repeater)
    }

    return (
        <ScrollVideosBackDiv onClick={slide} onMouseEnter={whileMouseEnter} onMouseLeave={ifMouseLeave} style={{ color: '#757575' }}>
            <Back className="iconScrollVideosBack" size={'2em'} />
        </ScrollVideosBackDiv>
    )
}

export default ScrollVideosBack