import styled from "@emotion/styled";

export const Flex = styled("div")(
    {
        width: "100%",
        padding: "0",
        display: "flex",
        textAlign: "center",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
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
            width: props.width,
            height: props.height,
            margin: props.margin,
            padding: props.padding,
            flexDirection: props.direction,
            justifyContent: props.justify,
            overflow: props.overflow,
            transition: props.transition,
            boxShadow: props.boxShadow,
        }
    }
)