import React from "react";
import { IoChevronForwardOutline as Forward } from "react-icons/io5"

function ScrollVideosForward(props) {
    function slide() {
        const videoDiv = document.querySelector(`#nextVideosRow${props.row}`)
        videoDiv.scrollLeft += 282
    }

    return (
        <div onClick={slide} className="scrollVideosForward" data-qnt="0" style={{ color: '#757575' }}>
            <Forward className="iconScrollVideosForward" size={'2em'} />
        </div>
    )
}

export default ScrollVideosForward