import styled from "styled-components"

export const PreviousVideoBtn = styled.div`
  width: 72px;
  height: 72px;
  background-color: rgba(0, 0, 0, 0.75);
  border-radius: 50%;
  border: 2px solid white;
  margin-bottom: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  
  @media (max-width: 1245px){
    position: fixed;
    top: 70px;
    left: 0;
    width: 50vw;
    background-color: black;
    border-radius: 0;
    border: none;
    border-top: 1px solid #313131;
    border-bottom: 1px solid #313131;
    border-right: 1px solid #313131;

    &:hover {
        background-color: #313131;
        height: 73px;
    }
}
`