import styled from "styled-components"

export const Title = styled.h1`
    width: 100%;
    font-size: ${props => props.theme.fontSize};
    color: ${props => props.theme.color};
    margin: ${props => props.theme.margin};
    font-weight: lighter;
    text-align: left;
`