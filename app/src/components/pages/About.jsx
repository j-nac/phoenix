import { VideoSlide, TextSlide, LeftImageTextSlide, BackgroundImageSlide, CardsSlide, MapSlide} from "../organisms/Slides";
import { TopMenu, HamburgerMenu } from "../organisms/NavElements";
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
        src1={peanuts} name1={["Person1"]} desc1={["Did something"]}
        src2={peanuts} name2={["Person2"]} desc2={["Did something"]}
        src3={peanuts} name3={["Person3"]} desc3={["Did something"]}
        src4={peanuts} name4={["Person4"]} desc4={["Did something"]}
        src5={peanuts} name5={["Person5"]} desc5={["Did something"]}
        src6={peanuts} name6={["Person6"]} desc6={["Did something"]}
      />
      <MapSlide header="CONTACT" paragraph={["Phone: 123-456-7890", "Email: astral@astral.com", "Address: 123 Astral St., Colorado"]} />
    </>
  )
};
  
export default About;