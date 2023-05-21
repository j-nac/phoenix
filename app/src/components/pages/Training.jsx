import { VideoSlide, TextSlide, LeftImageTextSlide, BackgroundImageSlide } from "../organisms/Slides";
import { TopMenu, HamburgerMenu, Footer } from "../organisms/NavElements";
import peanuts from "../../images/roasted-peanuts-jpg-1656535069.jpg";
import training1 from "../../images/Edited-KSC-20200924-PH-SPX01_0008~medium.jpg";

const Training = () => {
    return (
      <>
       <HamburgerMenu />
        <VideoSlide file="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" altimg={peanuts} main="TRAINING" tagline="Always prepared" position="bottomLeft" fit="menu"/>
        <TopMenu homeLink={"#root"} goLabel="FLY WITH US" />
        <TextSlide src={peanuts} header="FIRST STEPS TO SPACE" paragraph={["Passengers will undergo an extensive training program designed to prepare them for the unique challenges and requirements of traveling to space. The program includes a wide range of topics, such as the effects of zero gravity on the human body, emergency procedures, and basic spaceflight mechanics. You will engage in physical and mental training, including simulations of launch and landing procedures, to ensure that your body and mind is prepared for space travel.", "The program will also cover important safety measures and protocols, such as wearing a spacesuit, and how to operate various equipment and technology that may be used during the flight", "Additionally, customers will receive training on how to navigate the space station, how to use the facilities and equipment on board, and how to participate in recreational activities."]} />
        <div className="bg-black w-full"><div className="w-full max-w-slide mx-auto"><div className="mx-auto w-2/3 bg-white h-[2px]"/></div></div>
        <LeftImageTextSlide header="TRAINING ENSURES SAFETY"src={peanuts} desc={["The training program for our clients is comprehensive and informative, ensuring that clients have the knowledge and skills necessary to have a safe and enjoyable experience in space.", "At Astral, we go above industry standards, pairing careful vetting and training to ensure absolute security."]} />
        <BackgroundImageSlide main="OUR COACHES" background={`url(${training1}`} position="bottomRight" description="Our coaches have a required 800 hours space plus months in training and multiple required certifications ensuring only the best lead the way."/>
        <LeftImageTextSlide header="THE RECORD SPEAKS FOR ITSELF"src={peanuts} desc={["Our program's perfect track record reflects this. We put in the effort and attention to detail to ensure every passenger can respond to emergencies if needed. Have the confidence to go out into space and know what's ahead."]} />
        <Footer />
      </>
    )
};
  
export default Training;