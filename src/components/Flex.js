import styled from "styled-components"

export const Flex = styled.div`
    width: 100%;
    display: flex;
    flex-direction: ${props => props.theme.direction};
    justify-content: ${props => props.theme.justify};
    padding: ${props => props.theme.padding};
    text-align: center;
    align-items: center;
`