import React from "react";
import { IoChevronBackOutline as Back } from "react-icons/io5"

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
        <div onClick={slide} onMouseEnter={whileMouseEnter} onMouseLeave={ifMouseLeave} className="scrollVideosBack" style={{ color: '#757575' }}>
            <Back className="iconScrollVideosBack" size={'2em'} />
        </div>
    )
}

export default ScrollVideosBack