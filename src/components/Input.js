import styled from "@emotion/styled";

export const Input = styled("input")(
    {
        border: "1px solid black",
        borderRadius: "6px",
        paddingLeft: "3px"
    },
    (props) => {
        return {
            backgroundColor: props.bgColor,
            borderRadius: props.borderRadius,
            border: props.border,
            width: props.width,
            height: props.height,
            color: props.color,
            margin: props.margin,
            padding: props.padding,
        }
    }
)