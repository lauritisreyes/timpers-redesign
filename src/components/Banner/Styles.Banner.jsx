import styled from "styled-components";

export const StyledBanner = styled.a `
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 1rem 0;
    .Banner {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 90%;
        background-color: #F3F2F2;
        text-align: center;
        &-text {
            padding: 1rem 0;
        }
    }
`