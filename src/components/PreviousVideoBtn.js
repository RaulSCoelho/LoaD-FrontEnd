import styled from "styled-components"

export const PreviousVideoBtn = styled.div`
  min-width: 72px;
  min-height: 72px;
  background-color: rgba(0, 0, 0, 0.75);
  border-radius: 50%;
  border: 2px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  
  @media (max-width: 1258px){
    display: none;
  }
`