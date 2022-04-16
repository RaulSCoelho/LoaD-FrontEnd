import styled from "styled-components"

export const NextVideoBtnSmallVW = styled.div`
    width: 50vw;
    height: 72px;
    background-color: black;
    display: none;
    justify-content: center;
    align-items: center;
    border-top: 1px solid #313131;
    border-bottom: 1px solid #313131;
    cursor: pointer;

    &:hover {
        background-color: #313131;
        height: 72.5px;
    }

    @media (max-width: 1258px){
        display: flex;
    }
`