import styled from "@emotion/styled";

export const Title = styled("h1")(
    {
        width: "100%",
        fontWeight: "lighter",
        textAlign: "left",
        color: "#fff",

        "@media (max-width: 920px)": {
            width: "100vw",
            textAlign: "center"
        }
    },
    (props) => {
        return {
            color: props.color,
            margin: props.margin,
            textAlign: props.textAlign,
            height: props.height,
            maxWidth: props.maxWidth,
            fontSize: `min(${props.fontSize}, max(calc(${props.viewWidth} - ${props.fontSize}), 16px))`
        }
    }
)