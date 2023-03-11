import { Banner } from "./components/Banner/Banner"
import { Conditions } from "./components/Conditions/Conditions"
import { Header } from "./components/Header/Header"
import { Intro } from "./components/Intro/Intro"
import { Section } from "./components/Section/Section"



const App = () => {

  const general = {
    title: 'Nosotros',
    subtitle: 'La marca más normal del mundo',
    paragraph: 'Aunque queramos ser la marca más normal del mundo ¡Somos una empresa diferente! No solo fabricamos zapatillas, sino que también luchamos por la normalización de la discapacidad. Nuestra empresa está formada al 100% por personas con discapacidad y estamos súper orgullosos de ello. ¡Únete a cambiar el mundo y descubre nuestra maravillosa marca!',
    src: './timpers-team.jpg',
    alt: 'Timpers Team'
  }

  const newsletter = {
    title: 'Newsletter',
    subtitle: 'Consigue un 5% de descuento en la primera compra.',
    paragraph: 'Normalmente, te informaremos con ofertas exclusivas, novedades y algún que otro consejo.',
    src: './walking-timpers.jpg',
    alt: 'Timpers Team'
  }

  return (
    <>
      <Header/>
      <Banner/>
      <Intro/>
      <Section title={general.title} subtitle={general.subtitle} paragraph={general.paragraph} src={general.src} alt={general.alt}/>
      <Conditions/>
      <Section title={newsletter.title} subtitle={newsletter.subtitle} paragraph={newsletter.paragraph} src={newsletter.src} alt={newsletter.alt}/>
    </>
  )
}


export default App