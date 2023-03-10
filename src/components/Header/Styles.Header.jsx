import styled from 'styled-components'


export const StyledHeader = styled.header `
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: red;
    .Header {
        &-container {
            width: 80%;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            background-color: red;
        }
    }
`


export const Logo = styled.div `
    width: 100px;
    background-color: blue;
`


export const HeaderNav = styled.nav `
    .Nav {
        &-ul {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
        }
        &-li {
            background-color: yellow;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
        }
        &-link {
            text-transform: uppercase;
            padding: 1rem 0.5rem;
        }
    }
    background-color: green;
`


export const HeaderUserNav = styled.nav `
    width: 200px;
    height: 34px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: yellow;
`