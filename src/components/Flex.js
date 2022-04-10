import styled from "styled-components"

export const Flex = styled.div`
    width: 100%;
    display: flex;
    flex-direction: ${props => props.theme.flexDirection};
    justify-content: ${props => props.theme.flexJustify};
    text-align: center;
    align-items: center;
`