import styled from "styled-components";
import React from "react";

export const Text = (props: any) => {
    return <StyledText {...props}/>
}

export const StyledText = styled.p`
    margin-bottom: 19px;
    color: #ABB3BA;
    line-height: 20px;
    font-size: 12px;
    font-weight: 500;
`;