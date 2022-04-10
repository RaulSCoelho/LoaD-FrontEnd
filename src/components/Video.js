import React from "react";

function Video(props) {

    return (
        <div>
            <iframe
                width={props.width ? `${props.width}px` : "560"}
                height={props.width ? `${props.width * 0.5625}px` : "315"}
                src={props.url}
                title={props.title}
                frameborder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;"
                allowfullscreen="allowfullscreen"
                mozallowfullscreen="mozallowfullscreen"
                msallowfullscreen="msallowfullscreen"
                oallowfullscreen="oallowfullscreen"
                webkitallowfullscreen="webkitallowfullscreen">
            </iframe>
        </div>
    )
}

export default Video