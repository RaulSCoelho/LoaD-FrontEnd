import React from "react";
import { IoChevronForwardOutline as Forward } from "react-icons/io5"

function ScrollVideosForward(props) {
    var px = 0

    function slide() {
        const videoDiv = document.querySelector(`#nextVideosRow${props.row}`)
        const thumbWidth = document.querySelector('img.thumb').offsetWidth
        px += (thumbWidth * 2)
        videoDiv.style.marginLeft = `-${px}px`
    }

    return (
        <div onClick={slide} className="scrollVideosForward" style={{ color: '#757575' }}>
            <Forward className="iconScrollVideosForward" size={'2em'} />
        </div>
    )
}

export default ScrollVideosForward