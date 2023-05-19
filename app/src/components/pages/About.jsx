import { VideoSlide, TextSlide, LeftImageTextSlide, BackgroundImageSlide, CardsSlide } from "../organisms/Slides";
import { TopMenu, HamburgerMenu } from "../organisms/NavElements";
import peanuts from "../../images/roasted-peanuts-jpg-1656535069.jpg";

const About = () => {
  return (
    <>
      <HamburgerMenu/>
      <BackgroundImageSlide main="ABOUT US" background={`url(${peanuts}`} position="bottomLeft"/> 
      <LeftImageTextSlide src={peanuts} header="OUR FOUNDING" desc={["Fact 1", "Fact 2", "Fact 3"]} />
      <TextSlide src={peanuts} header="OUR MISSION" paragraph={["Fact 1", "Fact 2", "Fact 3"]} />
      <CardsSlide header="BOARD OF DIRECTORS" src1={peanuts} desc1={["Person1"]} src2={peanuts} desc2={["Person1"]} src3={peanuts} desc3={["Person1"]} src4={peanuts} desc4={["Person1"]} src5={peanuts} desc5={["Person1"]} src6={peanuts} desc6={["Person1"]} />
    </>
  )
};
  
export default About;