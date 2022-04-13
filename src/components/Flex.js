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

        "@media(max-width: 920px)": {
            padding: "0"
        }
    },
    (props) => {
        return {
            width: props.width,
            margin: props.margin,
            flexDirection: props.direction,
            justifyContent: props.justify,
            overflow: props.overflow,
            transition: props.transition,
        }
    }
)