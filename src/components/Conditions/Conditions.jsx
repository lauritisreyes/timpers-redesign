import { StyledConditions } from "./Styles.Conditions"


export const Conditions = () => {

    const info = [
        { id: 0, title:'Cambios y devoluciones'},
        { id: 1, title:'Envíos en 24-48h'},
        { id: 2, title:'Hecho en España'},
    ]

    return (
        <StyledConditions className="Conditions">
            <div className="Conditions-container">
                <ul className="Conditions-ul">
                    { info.map( ({id, title}) => 
                        <li key={id} className="Conditions-li">
                            <h5 className="Li-title">{title}</h5>
                            <a className="Li-link" href="">Leer más</a>
                        </li>
                    )}
                </ul>
            </div>

        </StyledConditions>
    )
}