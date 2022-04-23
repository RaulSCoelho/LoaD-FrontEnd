import styled from "@emotion/styled";

export const Box = styled("div")(
    {
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        "@media (max-width: 1258px)": {
            marginTop: "0px"
        },

        "@media (max-width: 920px)": {
            padding: "0"
        }
    },
    (props) => {
        return {
            backgroundColor: props.bgColor,
            backgroundImage: props.bgImage,
            width: props.width,
            height: props.height,
            minHeight: props.minHeight,
            padding: props.padding,
            margin: props.margin,
            alignItems: props.alignItems,
            "@media (max-width: 1258px)": {
                marginTop: props.mediaMarginTop
            },
        }
    }
)