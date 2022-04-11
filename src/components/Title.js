import styled from "styled-components"

export const Title = styled.h1`
    width: 100%;
    color: ${props => props.theme.color};
    margin: ${props => props.theme.margin};
    font-weight: lighter;
    text-align: left;
    font-size: min(${props => props.theme.maxSize}, max(calc(${props => props.theme.viewWidth} - ${props => props.theme.fontSize}), 16px));

`