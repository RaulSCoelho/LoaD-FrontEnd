import styled from "@emotion/styled";

export const Flex = styled("div")(
    {
        width: "100%",
        padding: "0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        flexDirection: "row",
        scrollbarWidth: "none",

        "::-webkit-scrollbar": {
            display: "none"
        },

        "@media(max-width: 920px)": {
            padding: "0"
        },
    },
    (props) => {
        return {
            backgroundColor: props.bgColor,
            borderRadius: props.borderRadius,
            display: props.display,
            width: props.width,
            height: props.height,
            margin: props.margin,
            padding: props.padding,
            flexDirection: props.direction,
            justifyContent: props.justify,
            alignItems: props.alignItems,
            overflow: props.overflow,
            transition: props.transition,
            boxShadow: props.boxShadow,
            "@media(max-width: 1610px)": {
                width: props.mediaWidth,
            },
            "@media(max-width: 1258px)": {
                flexDirection: props.mediaDirection,
                margin: props.mediaMargin,
            },
        }
    }
)