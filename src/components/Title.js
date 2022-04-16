import styled from "@emotion/styled";

export const Title = styled("h1")(
    {
        width: "100%",
        fontWeight: "lighter",
        textAlign: "center",
        color: "#fff",

        "@media (max-width: 920px)": {
            width: "100%",
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
            fontWeight: props.fontWeight,
            fontSize: `min(${props.fontSize}, max(calc(${props.viewWidth} - ${props.fontSize}), 16px))`
        }
    }
)