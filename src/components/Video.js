import React from "react";

function Video(props) {

    return (
        <div>
            <iframe
                width={props.width ? `${props.width}px` : "560"}
                height={props.width ? `${props.width * 0.5625}px` : "315"}
                src={props.url}
                title={props.title}
                frameBorder="0"
                allowFullScreen="allowfullscreen"
                mozallowfullscreen="mozallowfullscreen"
                msallowfullscreen="msallowfullscreen"
                oallowfullscreen="oallowfullscreen"
                webkitallowfullscreen="webkitallowfullscreen">
            </iframe>
        </div>
    )
}

export default Video