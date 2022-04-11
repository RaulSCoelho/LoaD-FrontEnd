import React from "react";
import { IoChevronBackOutline as Back } from "react-icons/io5"

function ScrollVideosBack(props) {
    var px = 0

    function slide() {
        const videoDiv = document.querySelector(`#nextVideosRow${props.row}`)
        const thumbWidth = document.querySelector('img.thumb').offsetWidth
        px += (thumbWidth * 2)
        videoDiv.style.marginRight = `-${px}px`
    }

    return (
        <div onClick={slide} className="scrollVideosBack" style={{ color: '#757575' }}>
            <Back className="iconScrollVideosBack" size={'2em'} />
        </div>
    )
}

export default ScrollVideosBack