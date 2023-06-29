import "../../styles/home.css";
import peanuts from "../../images/roasted-peanuts-jpg-1656535069.jpg";
import rocket1 from "../../images/Optimized-spacex-uj3hvdfQujI-unsplash.jpg"
import moon1 from "../../images/Optimized-nicolas-thomas-wKlqqfNTLsI-unsplash.jpg"
import spacemont from "../../images/Optimized-space-montage.mp4"
import people1 from "../../images/Optimized-christina-wocintechchat-com-faEfWCdOKIg-unsplash.jpg"
import training1 from "../../images/s84-36901~medium.jpg"
import blah from "../../images/martin-jaros-osAeymdDVyk-unsplash.jpg"
import { VideoSlide, BackgroundImageSlide, QuoteSlide  } from "../organisms/Slides";
import { TopMenu, HamburgerMenu, Footer } from "../organisms/NavElements";
import { useEffect } from "react";
const Home = () => {
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])
    return (
    <>
        <HamburgerMenu homeLink={"#root"} goLabel="FLY WITH US" />
        <VideoSlide file={spacemont} main="ASTRAL" tagline="TOUCH THE STARS" position="bottomLeft" fit="menu"/>
        <TopMenu homeLink={"#root"} goLabel="FLY WITH US" />
        <BackgroundImageSlide main="SPACESHIPS" sub="Ride in Comfort" label="LEARN MORE" link="/#/ships" background={`linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${rocket1}`} position="bottomLeft" />
        <BackgroundImageSlide main="DESTINATIONS" label="LEARN MORE" link="/#/destinations" background={`url(${moon1}`} position="topLeft" description="See the moon closer than ever before with our first-class lunar experience"/>
        <QuoteSlide quote="Astral lies at the bleeding edge of innovation, bringing science fiction to life." author="Aaron Donson" title="Former NASA engineer and technology editor of the Springfield Inquirer" image={blah} header="A Revolution in Travel"/>
        <BackgroundImageSlide main="TRAINING" label="LEARN MORE" link="/#/training" background={`linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${training1}`} position="topLeft" description="Common diving training in our world class facility in Telluride, CO" />
        <BackgroundImageSlide main="ABOUT US" sub="You Are Our Mission" label="LEARN MORE" link="/#/about" background={`linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${people1}`} position="bottomLeft" />
        <Footer />
    </>
    );
};
  
export default Home;