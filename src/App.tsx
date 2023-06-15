import React from "react";

import './App.css';
import Card from "./components/Card";
import styled from "styled-components";

function App() {
    return (
        <AppWrapper>
            <Card />
        </AppWrapper>
    );
}

export default App;

export const AppWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    background-color: #F5F5F5;
    min-height: 100vh;
`;