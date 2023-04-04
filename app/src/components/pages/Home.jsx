import "../../styles/home.css";
import peanuts from "../../images/roasted-peanuts-jpg-1656535069.jpg";
import peanuts1 from "../../images/peanuts-1.jpg";
import { BackgroundImageSlide  } from "../organisms/Slides";
import { TopMenu, HamburgerMenu } from "../organisms/NavElements";

import $ from "jquery";

const Home = () => {
    return (
    <>
        <TopMenu openMenu={clicked} homeLink={"#root"} goLabel="FLY WITH US" />
        <HamburgerMenu clicked={clicked}/>
        <BackgroundImageSlide main="ASTRAL" tagline="TOUCH THE STARS" background={`linear-gradient(rgba(0,0,0,0) 98%, black 101%), url(${peanuts1}`} position="bottomLeft" description="" />
        <BackgroundImageSlide main="SPACESHIPS" sub="Ride in Comfort" label="LEARN MORE" link="/" background={`linear-gradient(rgba(0,0,0,0) 98%, black 101%), url(${peanuts}`} position="bottomLeft" description="" />
        <BackgroundImageSlide main="DESTINATIONS" label="LEARN MORE" link="/" background={`linear-gradient(rgba(0,0,0,0) 98%, black 101%), url(${peanuts}`} position="topLeft" description="A short description, no longer than a paragraph"/>
    </>
    );
};

function clicked() {
    $("#menu").toggleClass("closed")
    $("#menu-back").toggleClass("closed")
    $("#open").toggleClass("hide")
    $("#close").toggleClass("hide")
}
  
export default Home;