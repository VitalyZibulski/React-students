import styled from "styled-components";

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background-color: #4E71FE;
    width: 86px;
    height: 30px;
    margin-right: 12px;
    border-radius: 5px;
    font-weight: 700;
    font-size: 10px;
    border: none;
    
    &:hover {
      cursor: pointer;
    }
`;

export const SimpleButton = styled(Button)`
    border: 2px solid #4E71FE;
    background-color: white;
    color: #4E71FE;
`;