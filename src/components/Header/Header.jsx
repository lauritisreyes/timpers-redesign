import { HeaderNav, HeaderUserNav, Logo, StyledHeader } from "./Styles.Header"
import { Icon } from "../Common/Icons/Icons"


export const Header = () => {

    const sections = [
        { id:0, text: 'Zapatillas' },
        { id:1, text: 'Kids' },
        { id:2, text: 'Últimas Novedades' },
        { id:3, text: 'Universo Timpers' },
        { id:4, text: 'Contacto' }
    ]

    const user = [
        { id:0, text:'Heart' },
        { id:1, text:'ShopCart' },
        { id:2, text:'User' },
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
                    <HeaderUserNav className="Header-userNav">
                        <ul className="UserNav-ul">
                            { user.map ( (text, id) =>
                                <li key={id} className="UserNav-li">
                                    <a className="UserNav-link">
                                        <Icon name='User'/>
                                        {/* <Icon name={text}/> */}
                                    </a>
                                </li>
                            )}
                        </ul>
                    </HeaderUserNav>
                </div>
                
            </StyledHeader>
        </>
    )
}