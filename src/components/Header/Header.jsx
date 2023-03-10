import { HeaderNav, HeaderUserNav, Logo, StyledHeader } from "./Styles.Header"


export const Header = () => {

    const sections = [
        { id:0, text: 'Zapatillas' },
        { id:1, text: 'Kids' },
        { id:2, text: 'Últimas Novedades' },
        { id:3, text: 'Universo Timpers' },
        { id:4, text: 'Contacto' }
    ]

    return (
        <>
            <StyledHeader className="Header">
                <div className="Header-container">
                    <Logo className="Header-logo">
                        <a className="Logo-link">
                            <img src="../General/logo-black.png" className="Logo-img"/>
                        </a>
                    </Logo>
                    <HeaderNav className="Header-nav">
                        <ul className="Nav-ul">
                            {sections.map( ( {text, id} ) =>
                                <li key={id} className="Nav-li">
                                    <a className="Nav-link">{text}</a>
                                </li>
                            )}
                        </ul>
                    </HeaderNav>
                    <HeaderUserNav>
                        <ul className="UserNav-ul">
                            
                        </ul>
                    </HeaderUserNav>
                </div>
                
            </StyledHeader>
        </>
    )
}