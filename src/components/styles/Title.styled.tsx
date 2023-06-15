import React from "react";
import styled from "styled-components";

export const Title = (props: any) => {
    return <StyledTitle {...props}/>
}

export const StyledTitle = styled.h1`
    margin-bottom: 20px;
    font-size: 16px;
    font-weight: 700;
`;