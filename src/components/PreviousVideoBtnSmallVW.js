import styled from "styled-components"

export const PreviousVideoBtnSmallVW = styled.div`
    width: 50vw;
    height: 72px;
    background-color: black;
    display: none;
    justify-content: center;
    align-items: center;
    border-top: 1px solid #313131;
    border-bottom: 1px solid #313131;
    border-right: 1px solid #313131;
    cursor: pointer;

    &:hover {
        background-color: #313131;
        height: 73px;
    }

    @media (max-width: 1258px){
        display: flex;
    }
`