import styled from "styled-components"

export const Box = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: ${props => props.theme.direction};
    justify-content: center;
    align-items: center;
    text-align: ${props => props.theme.textAlign};
    margin: ${props => props.theme.margin};
    padding: ${props => props.theme.padding};
    position: ${props => props.theme.position};
    right: ${props => props.theme.right};
`