import React from "react";
import { IoChevronBackOutline as Back } from "react-icons/io5"

function ScrollVideosBack(props) {
    function slide() {
        const videoDiv = document.querySelector(`#nextVideosRow${props.row}`)
        videoDiv.scrollLeft -= 282
    }

    return (
        <div onClick={slide} className="scrollVideosBack" style={{ color: '#757575' }}>
            <Back className="iconScrollVideosBack" size={'2em'} />
        </div>
    )
}

export default ScrollVideosBack