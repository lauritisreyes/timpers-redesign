import styled from "styled-components"

export const StyledIntro = styled.div `
    width: 100%;
    height: 600px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #F7F7F7;
    .Intro {
        &-container {
            width: 80%;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            height: 100%;
        }
        &-media {
            flex-grow: 1;
            flex-basis: 0;
            overflow: hidden;
            background-color: red;
            height: 100%;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
        }
        &-text {
            flex-grow: 1;
            flex-basis: 0;
            height: 100%;
        }
    }

`