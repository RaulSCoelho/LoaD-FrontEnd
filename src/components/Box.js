import styled from "styled-components"

export const Box = styled.div`
    width: 100%;
    display: flex;
    flex-direction: ${props => props.theme.boxDirection};
    justify-content: center;
    align-items: center;
    text-align: ${props => props.theme.boxTextAlign};
    margin: ${props => props.theme.boxMargin};
    padding: ${props => props.theme.boxPadding};
`