import { StyledSection } from "./Styles.Section"


export const Section = ({title, subtitle, paragraph, src, alt}) => {
    return (
        <StyledSection className="Section" >
            <div className="Section-container">
                <h2 className="Section-title">{title}</h2>
                <div className="Section-content">
                    <div className="Section-media">
                        <img className="Section-img" src={src} alt={alt}/>
                    </div>
                    <div className="Section-info">
                        <div className="Info-text">
                            <h3 className="Text-subtitle">{subtitle}</h3>
                            <p className="Text-paragraph">{paragraph}</p>
                        </div>
                        
                    </div>
                </div>
                
            </div>
        </StyledSection>
    )
}

