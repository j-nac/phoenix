import "../../styles/home.css";
import peanuts from "../../images/roasted-peanuts-jpg-1656535069.jpg";
import rocket1 from "../../images/Optimized-spacex-uj3hvdfQujI-unsplash.jpg"
import moon1 from "../../images/Optimized-nicolas-thomas-wKlqqfNTLsI-unsplash.jpg"
import people1 from "../../images/Optimized-christina-wocintechchat-com-faEfWCdOKIg-unsplash.jpg"
import training1 from "../../images/s84-36901~medium.jpg"
import safety1 from "../../images/KSC-20200302-PH-KLS01_0011~medium.jpg"
import safety2 from "../../images/jsc2022e045238~medium.jpg"
import { VideoSlide, BackgroundImageSlide, QuoteSlide  } from "../organisms/Slides";
import { TopMenu, HamburgerMenu } from "../organisms/NavElements";

const Home = () => {
    return (
    <>
        <HamburgerMenu homeLink={"#root"} goLabel="FLY WITH US" />
        <VideoSlide file="https://svs.gsfc.nasa.gov/vis/a010000/a013500/a013537/13537_Apollo13ViewsMoon4K_HDversion.webm" altimg={peanuts} main="ASTRAL" tagline="TOUCH THE STARS" position="bottomLeft"/>
        <TopMenu homeLink={"#root"} goLabel="FLY WITH US" />
        <BackgroundImageSlide main="SPACESHIPS" sub="Ride in Comfort" label="LEARN MORE" link="/ships" background={`linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${rocket1}`} position="bottomLeft" />
        <BackgroundImageSlide main="DESTINATIONS" label="LEARN MORE" link="/destinations" background={`url(${moon1}`} position="topLeft" description="A short description, no longer than a paragraph"/>
        <QuoteSlide quote="Astral lies at the bleeding edge of innovation, bringing science fiction to life." author="Aaron Donson" title="Former NASA engineer and reporter for the Springfield Inquirer" image={peanuts} header="A Revolution in Travel"/>
        <BackgroundImageSlide main="TRAINING" label="LEARN MORE" link="/training" background={`linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${training1}`} position="topLeft" description="A short description, no longer than 2 sentences." />
        <BackgroundImageSlide main="SAFETY" sub="Rest Easily In Our Craft" label="LEARN MORE" link="/safety" background={`url(${safety2}`} position="bottomRight" />
        <BackgroundImageSlide main="ABOUT US" sub="You Are Our Mission" label="LEARN MORE" link="/about" background={`linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${people1}`} position="bottomLeft" />
    </>
    );
};
  
export default Home;