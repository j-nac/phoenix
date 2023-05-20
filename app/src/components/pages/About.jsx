import { TextSlide, LeftImageTextSlide, BackgroundImageSlide, CardsSlide, MapSlide} from "../organisms/Slides";
import { TopMenu, HamburgerMenu, Footer } from "../organisms/NavElements";
import peanuts from "../../images/roasted-peanuts-jpg-1656535069.jpg";

const About = () => {
  return (
    <>
      <HamburgerMenu/>
      <TopMenu/>
      <BackgroundImageSlide main="ABOUT US" background={`url(${peanuts}`} position="bottomLeft"/> 
      <LeftImageTextSlide src={peanuts} header="OUR FOUNDING" desc={["Fact 1", "Fact 2", "Fact 3"]} />
      <TextSlide src={peanuts} header="OUR MISSION" paragraph={["Fact 1", "Fact 2", "Fact 3"]} />
      <CardsSlide header="BOARD OF DIRECTORS" 
        src={[peanuts, peanuts, peanuts, peanuts, peanuts, peanuts]}
        name={[["Person1"], ["Person2"], ["Person3"], ["Person4"], ["Person5"], ["Person6"]]}
        desc={[["Did something"], ["Did something"], ["Did something"], ["Did something"], ["Did something"], ["Did something"]]}
      />
      <MapSlide header="CONTACT" paragraph={["Phone: 123-456-7890", "Email: astral@astral.com", "Address: 123 Astral St., Colorado"]} />
      <Footer/>
    </>
  )
};
  
export default About;