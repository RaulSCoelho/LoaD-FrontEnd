import styled from "@emotion/styled";

export const Button = styled("button")(
    {
        backgroundColor: "white",
        border: "1px solid black",
        borderRadius: "10px",
        fontWeight: "bold",
        justifyContent: "center",
        alignItems: "center",
        padding: "5px",

        "&:hover": {
            backgroundColor: "rgb(207, 207, 207)"
        }
    },
    (props) => {
        return {
            backgroundColor: props.bgColor,
            width: props.width,
            height: props.height,
            padding: props.padding,
            margin: props.margin,
        }
    }
)