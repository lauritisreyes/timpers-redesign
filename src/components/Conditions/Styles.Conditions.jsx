import styled from "styled-components";


export const StyledConditions = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    .Conditions {
        &-container {
            width: 70%;
            background-color: #F7F7F7;
            padding: 4rem 0;
        }
        &-ul {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            gap: 6rem;
            padding: 0 4rem;
        }
        &-li {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 1rem;
            .Li {
                &-link {
                    font-size: 0.875rem;
                }
            }
        }
    }
`