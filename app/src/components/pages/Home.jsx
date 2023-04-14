import "../../styles/home.css";
import peanuts from "../../images/roasted-peanuts-jpg-1656535069.jpg";
import peanuts1 from "../../images/peanuts-1.jpg";
import { BackgroundImageSlide, QuoteSlide  } from "../organisms/Slides";
import { TopMenu, HamburgerMenu } from "../organisms/NavElements";

const Home = () => {
    return (
    <>
        <HamburgerMenu homeLink={"#root"} goLabel="FLY WITH US" />
        <BackgroundImageSlide main="ASTRAL" tagline="TOUCH THE STARS" background={`linear-gradient(rgba(0,0,0,0) 98%, black 101%), url(${peanuts1}`} position="bottomLeft" />
        <TopMenu homeLink={"#root"} goLabel="FLY WITH US" />
        <BackgroundImageSlide main="SPACESHIPS" sub="Ride in Comfort" label="LEARN MORE" link="/ships" background={`linear-gradient(rgba(0,0,0,0) 98%, black 101%), url(${peanuts}`} position="bottomLeft" />
        <BackgroundImageSlide main="DESTINATIONS" label="LEARN MORE" link="/" background={`linear-gradient(rgba(0,0,0,0) 98%, black 101%), url(${peanuts}`} position="topLeft" description="A short description, no longer than a paragraph"/>
        <QuoteSlide quote="Astral lies at the bleeding edge of innovation, bringing science fiction to life." author="Aaron Donson" title="Former NASA engineer and reporter for the Springfield Inquirer" image={peanuts} header="A Revolution in Travel"/>
        <BackgroundImageSlide main="TRAINING" label="LEARN MORE" link="/" background={`linear-gradient(black -1%, rgba(0,0,0,0) 2%, rgba(0,0,0,0) 98%, black 101%), url(${peanuts}`} position="topLeft" description="A short description, no longer than 2 sentences." />
        <BackgroundImageSlide main="SAFETY" sub="Rest Easily In Our Craft" label="LEARN MORE" link="/" background={`linear-gradient(rgba(0,0,0,0) 98%, black 101%), url(${peanuts}`} position="bottomLeft" />
        <BackgroundImageSlide main="ABOUT US" sub="You Are Our Mission" label="LEARN MORE" link="/" background={`linear-gradient(rgba(0,0,0,0) 98%, black 101%), url(${peanuts}`} position="bottomLeft" />
    </>
    );
};
  
export default Home;