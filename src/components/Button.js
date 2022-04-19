import styled from "@emotion/styled";

export const Button = styled("button")(
    {
        backgroundColor: "white",
        border: "1px solid black",
        color: "black",
        borderRadius: "6px",
        fontSize: "15pt",
        display: "flex",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        padding: "5px",
        cursor: "pointer",

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