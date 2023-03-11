import { StyledSection, StyledSectionParagraph, StyledSectionSubtitle, StyledSectionTitle } from "./Styles.Section"


export const Section = () => {
    return (
        <StyledSection className="Section" >
            <div className="Section-container">
                <SectionTitle text='Nosotros'/>
                <div className="Section-content">
                    <div className="Section-media">
                        <img className="Section-img" src="./timpers-team.jpg" alt="Timpers team"/>
                    </div>
                    <div className="Section-info">
                        <div className="Info-text">
                            <StyledSectionSubtitle className="Text-title">La marca más normal del mundo</StyledSectionSubtitle>
                            <StyledSectionParagraph className="Text-title">Aunque queramos ser la marca más normal del mundo ¡Somos una empresa diferente! No solo fabricamos zapatillas, sino que también luchamos por la normalización de la discapacidad.</StyledSectionParagraph>
                            <StyledSectionParagraph className="Text-title">Nuestra empresa está formada al 100% por personas con discapacidad y estamos súper orgullosos de ello. ¡Únete a cambiar el mundo y descubre nuestra maravillosa marca!</StyledSectionParagraph>
                        </div>
                        
                    </div>
                </div>
                
            </div>
        </StyledSection>
    )
}


const SectionTitle = ({text}) => {
    return (
        <StyledSectionTitle>{text}</StyledSectionTitle>
    )
}