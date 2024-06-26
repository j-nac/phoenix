import { TextSlide, LeftImageTextSlide, BackgroundImageSlide, CardsSlide, MapSlide} from "../organisms/Slides";
import { TopMenu, HamburgerMenu, Footer } from "../organisms/NavElements";
import person1 from "../../images/erik-lucatero-d2MSDujJl2g-unsplash.jpg";
import person2 from "../../images/giovanni-ilardi-ZjAHXxPuY70-unsplash.jpg";
import person3 from "../../images/jake-nackos-IF9TK5Uy-KI-unsplash.jpg";
import person4 from "../../images/joseph-gonzalez-iFgRcqHznqg-unsplash.jpg";
import person5 from "../../images/sandro-g-photography-tk7rYB-0wVI-unsplash.jpg";
import person6 from "../../images/shiona-das-ORQiesQvZvg-unsplash.jpg";
import TopImage from "../../images/campaign-creators-gMsnXqILjp4-unsplash.jpg";
import Founding from "../../images/jean-philippe-delberghe-YwSf1o8s79c-unsplash.jpg";
import Rocket from "../../images/terence-burke-WV7ZMt3RjsQ-unsplash.jpg";
import { useEffect } from "react";
const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <HamburgerMenu/>
      <BackgroundImageSlide main="ABOUT US" background={`url(${TopImage}`} position="bottomLeft" fit="menu"/>
      <TopMenu/>
      <LeftImageTextSlide src={Founding} header="OUR FOUNDING" desc={["Astral emerged from the vision and passion of two graduate students and a tech entrepreneur seeking to reach beyond the stars. Founded in 2023, Astral got off the ground operating on a shoestring budget and an impossible deadline: send a rocket to space in three years.", "Since then, Astral has led a record of doing the impossible to become the largest space tourism company in the world (or galaxy for that matter). With Astral, anything can be achieved. Fueled by our firm belief in the ability and ingenuity of humanity, and the goal of making space travel accessible to everyone, we have propelled humanity to new heights."]} />
      <div className="bg-black w-full"><div className="w-full max-w-slide mx-auto"><div className="mx-auto w-2/3 bg-white h-[2px]"/></div></div>
      <TextSlide src={Rocket} header="OUR MISSION" paragraph={["Astral set out with a remarkable mission: to democratize space travel and open it up for the average person. Driven by the belief that space exploration should be a transformative and awe-inspiring experience for everyone, we embarked on a mission to offer commercial space travel opportunities.", "Here at Astral we aim to create a seamless and unforgettable experience for our customers using cutting-edge technology and a commitment to safety. Our state-of-the-art spacecraft, designed with meticulous attention to detail, ensures optimal comfort and security during the journey to the stars. Our highly skilled team of astronauts, engineers, and support staff works diligently to deliver a flawless experience, where travelers can witness the breathtaking beauty of our planet from the depths of space.", "Beyond simply providing an extraordinary adventure, we are also deeply committed to environmental sustainability. By integrating sustainable practices into their operations and utilizing clean energy sources, we strive to minimize their ecological footprint and contribute to the preservation of our fragile planet.", "Through innovation, accessibility, and a dedication to environmental responsibility, we continue to push the boundaries of space tourism, fulfilling our mission of turning dreams of space travel into a tangible reality for all."]} />
      <CardsSlide header="BOARD OF DIRECTORS" 
        src={[person1, person2, person3, person4, person5, person6]}
        name={[["John Derrin"], ["Elizabeth Jackson"], ["Jenna Spencer"], ["Jakob Black"], ["Harold Wheaton"], ["Alexa Dowel"]]}
        desc={[["Board Chairman"], ["Executive Director"], ["Chief Financial Officer"], ["Director"], ["Chief Marketing Officer"], ["Chief Executive Officer"]]}
      />
      <MapSlide header="CONTACT" paragraph={["Phone: 123-456-7890", "Email: astral@astral.com", "Address: 123 Astral St., Colorado"]} />
      <Footer/>
    </>
  )
};
  
export default About;