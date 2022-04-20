import styled from 'styled-components'

export const Border = styled("div")(
    {
        width: "100%",
        borderBottom: "1px solid #757575",
    },
    (props) => {
        return {
            borderBottom: props.border,
            width: props.width,
            margin: props.margin,
            padding: props.padding,
        }
    }
)