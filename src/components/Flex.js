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
        boxSizing: "border-box",

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
            border: props.border,
            borderTopLeftRadius: props.borderTopLeftRadius,
            borderTopRightRadius: props.borderTopRightRadius,
            display: props.display,
            width: props.width,
            maxWidth: props.maxWidth,
            minWidth: props.minWidth,
            height: props.height,
            minHeight: props.minHeight,
            maxHeight: props.maxHeight,
            margin: props.margin,
            padding: props.padding,
            flexDirection: props.direction,
            justifyContent: props.justify,
            alignItems: props.alignItems,
            textAlign: props.textAlign,
            overflow: props.overflow,
            overflowY: props.overflowY,
            overflowX: props.overflowX,
            overscrollBehavior: props.overscrollBehavior,
            transition: props.transition,
            boxShadow: props.boxShadow,
            wordBreak: props.wordBreak,
            cursor: props.cursor,
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