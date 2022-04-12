import styled from "@emotion/styled";

export const Box = styled("div")(
    {
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        "@media (max-width: 1258px)": {
            marginTop: "72px"
        },

        "@media (max-width: 920px)": {
            padding: "0",
            marginTop: "0px"
        }
    },
    (props) => {
        return {
            flexDirection: props.direction,
            textAlign: props.textAlign,
            margin: props.margin,
            width: props.width,
            padding: props.padding,
            position: props.position,
            right: props.right,
        }
    }
)