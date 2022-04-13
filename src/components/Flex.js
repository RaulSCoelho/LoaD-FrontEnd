import styled from "@emotion/styled";

export const Flex = styled("div")(
    {
        padding: "0",
        display: "flex",
        textAlign: "center",
        alignItems: "center",

        "@media(max-width: 920px)": {
            padding: "0"
        }
    },
    (props) => {
        return {
            width: props.width,
            flexDirection: props.direction,
            justifyContent: props.justify,
            margin: props.margin
        }
    }
)