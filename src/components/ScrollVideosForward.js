import React from "react";
import { IoChevronForwardOutline as Forward } from "react-icons/io5"

function ScrollVideosForward(props) {
    var px = 0

    function slide() {
        const videoDiv = document.querySelector(`#nextVideosRow${props.row}`)
        const forward = document.querySelector('.scrollVideosForward')
        const thumb = document.querySelector('img.thumb').offsetWidth

        var comprimento = thumb * props.lessonsQnt
        if (videoDiv.offsetWidth < comprimento) {
            px += (thumb * 2)
            videoDiv.style.marginLeft = `${-px}px`
            forward.dataset.qnt = parseInt(forward.dataset.qnt) + 1
            videoDiv.style.width = `${videoDiv.offsetWidth + thumb}px`
        }
    }

    return (
        <div onClick={slide} className="scrollVideosForward" data-qnt="0" style={{ color: '#757575' }}>
            <Forward className="iconScrollVideosForward" size={'2em'} />
        </div>
    )
}

export default ScrollVideosForward