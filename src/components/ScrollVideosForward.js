import React from "react";
import { IoChevronForwardOutline as Forward } from "react-icons/io5"

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
        <div onClick={slide} onMouseEnter={whileMouseEnter} onMouseLeave={ifMouseLeave} className="scrollVideosForward" style={{ color: '#757575' }}>
            <Forward className="iconScrollVideosForward" size={'2em'} />
        </div>
    )
}

export default ScrollVideosForward