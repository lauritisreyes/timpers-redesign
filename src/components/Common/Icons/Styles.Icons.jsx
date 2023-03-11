import styled from "styled-components"

export const StyledIcon = styled.div `
    background-color: green;
    width: 2rem;
    height: 2rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    .Icon {
        &-svg {
            color: red;
            background-color: green;
        }
    }

`