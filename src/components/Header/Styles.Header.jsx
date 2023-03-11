import styled from 'styled-components'


export const StyledHeader = styled.header `
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: white;
    padding: 1rem 0;
    .Header {
        &-container {
            width: 80%;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
        }
    }
`


export const Logo = styled.div `
    width: 100px;
    background-color: white;
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
`


export const HeaderUserNav = styled.nav `
    width: 200px;
    height: 34px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    .UserNav {
        &-ul {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            gap: 1rem;
        }
        &-li {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
        }
    }
`