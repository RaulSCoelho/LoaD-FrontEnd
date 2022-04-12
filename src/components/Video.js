import React from "react";
import styled from "@emotion/styled";

export const VideoDiv = styled("div")(
    {
        ".currentVideo": {
            "@media (max-width: 1258px)": {
                width: "calc(100vw - 280px)",
                height: "calc(calc(100vw - 180px) * 0.5625)",
            },
            "@media(max-width: 920px)": {
                minWidth: "100vw",
                minHeight: "calc(100vw * 0.5625)",
            }
        },
    },
    (props) => {
        return {
            margin: props.margin,
        }
    }
)

function Video(props) {

    return (
        <VideoDiv margin={props.margin}>
            <iframe
                width={props.width ? `${props.width}px` : "560"}
                height={props.width ? `${props.width * 0.5625}px` : "315"}
                src={props.url}
                title={props.title}
                className={props.nameClass}
                frameBorder="0"
                allowFullScreen="allowfullscreen"
                mozallowfullscreen="mozallowfullscreen"
                msallowfullscreen="msallowfullscreen"
                oallowfullscreen="oallowfullscreen"
                webkitallowfullscreen="webkitallowfullscreen">
            </iframe>
        </VideoDiv>
    )
}

export default Video