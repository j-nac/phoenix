import "../../styles/home.css";
import peanuts from "../../images/roasted-peanuts-jpg-1656535069.jpg";
import { BackgroundImageSlide  } from "../organisms/Slides";
import { TopMenu, HamburgerMenu } from "../organisms/NavElements";

import $ from "jquery";

const Home = () => {
    return (
    <>
        <TopMenu openMenu={clicked} homeLink={"/"} goLabel="FLY WITH US" />
        <HamburgerMenu clicked={clicked}/>
        <BackgroundImageSlide main="ASTRAL" tagline="TOUCH THE STARS" image={peanuts} position="bottomLeft" />
        <BackgroundImageSlide main="SPACESHIPS" sub="Ride in Comfort" label="LEARN MORE" link="/" image={peanuts} position="bottomLeft" />
        <BackgroundImageSlide main="DESTINATIONS" label="LEARN MORE" link="/" image={peanuts} position="topLeft" />
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