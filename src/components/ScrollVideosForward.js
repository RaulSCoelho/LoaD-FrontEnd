import React from "react";
import styled from "styled-components"
import { IoChevronForwardOutline as Forward } from "react-icons/io5"

export const ScrollVideosForwardDiv = styled.div`
width: 60px;
height: 60px;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;

.iconScrollVideosForward{
    margin-bottom: 52px;
}

&:hover .iconScrollVideosForward{
    height: 3em;
    width: 3em;
    color: #fff;
}
`

function ScrollVideosForward(props) {
    function slide() {
        const videoDiv = document.querySelector(`#nextVideosRow${props.module}`)
        videoDiv.style = "scroll-behavior: smooth;"
        videoDiv.scrollLeft += 282
    }
    
    let repeater

    function whileMouseEnter(){
        let viewWidth = window.innerWidth

        if(viewWidth > 920){
            repeater = setInterval(slide, 1000)
        }
    }

    function ifMouseLeave(){
        let viewWidth = window.innerWidth

        if(viewWidth > 920){
            clearInterval(repeater)
        }
    }

    return (
        <ScrollVideosForwardDiv onClick={slide} onMouseEnter={whileMouseEnter} onMouseLeave={ifMouseLeave} style={{ color: '#757575' }}>
            <Forward className="iconScrollVideosForward" size={'2em'} />
        </ScrollVideosForwardDiv>
    )
}

export default ScrollVideosForward