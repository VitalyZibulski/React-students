import React from 'react';
import styled from "styled-components";

export const Flex = (props: any) => {
    return <StyledFlex {...props} />
};

interface StyledFlexProps {
    direction?: string
    align?: string
    justify?: string
}

const StyledFlex = styled.div<StyledFlexProps>`
    display: flex;
    flex-direction: ${({direction}) => direction || 'row'};
    align-items: ${({align}) => align || 'stretch'};
    justify-content ${({justify}) => justify || 'stretch'};
`;
