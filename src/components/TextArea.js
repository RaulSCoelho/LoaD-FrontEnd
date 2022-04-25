import styled from "@emotion/styled";

export const TextArea = styled("textarea")(
    {
        resize: "none",
        overflowY: "scroll",
        borderRadius: "6px",
        scrollbarWidth: "none",

        "::-webkit-scrollbar": {
            display: "none"
        },
        
    },
    (props) => {
        return {
            backgroundColor: props.bgColor,
            borderRadius: props.borderRadius,
            border: props.border,
            width: props.width,
            height: props.height,
            minHeight: props.minHeight,
            maxHeight: props.maxHeight,
            color: props.color,
            margin: props.margin,
            padding: props.padding,
        }
    }
)