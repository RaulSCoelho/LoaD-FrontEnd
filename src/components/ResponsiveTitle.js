import styled from "@emotion/styled";

export const ResponsiveTitle = styled("h1")(
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
            width: props.width,
            color: props.color,
            margin: props.margin,
            textAlign: props.textAlign,
            height: props.height,
            maxWidth: props.maxWidth,
            fontWeight: props.fontWeight,
            wordBreak: props.wordBreak,
            fontSize: `min(${props.fontSize}, max(calc(${props.viewWidth} - ${props.fontSize}), 16px))`,
            "@media(max-width: 1610px)": {
                textAlign: props.mediaTextAlign,
            },
            "@media(max-width: 1258px)": {
                width: props.mediaWidth,
            },
        }
    }
)