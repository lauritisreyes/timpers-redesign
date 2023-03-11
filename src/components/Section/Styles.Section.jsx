import styled from "styled-components";


export const StyledSection = styled.section `
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 10rem 0;
    .Section {
        &-container {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            width: 70%;
        }
        &-content {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
        }
        &-media {
            flex-basis: 0;
            flex-grow: 1;
        }
        &-info {
            flex-basis: 0;
            flex-grow: 1;
            .Info {
                &-text {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content: center;
                    padding: 4rem;
                }
            }
        }
    }
`

export const StyledSectionTitle = styled.h2 `
    font-size: 3rem;
    margin: 0 0 3rem 5rem;
    line-height: 160%;
`

export const StyledSectionSubtitle = styled.h3 `
    font-size: 2rem;
    margin: 0 0 3rem 0;
    line-height: 160%;
`

export const StyledSectionParagraph = styled.p `
    font-size: 1rem;
    margin: 0 0 1rem 0;
    line-height: 160%;
`
