import "../../styles/home.css";
import peanuts from "../../images/roasted-peanuts-jpg-1656535069.jpg";
import { VideoSlide, BackgroundImageSlide  } from "../organisms/Slides";
import { TopMenu, HamburgerMenu, Footer } from "../organisms/NavElements";
const Destinations = () => {
    return (
      <>
        <HamburgerMenu homeLink={"#root"} goLabel="FLY WITH US" />
        <VideoSlide file="https://svs.gsfc.nasa.gov/vis/a010000/a013500/a013537/13537_Apollo13ViewsMoon4K_HDversion.webm" fit="menu" position="bottomLeft" main="DESTINATIONS" tagline="OH THE PLACES YOU'LL GO"/>
        <TopMenu homeLink={"#root"} goLabel="FLY WITH US" />
        <BackgroundImageSlide label="BUY NOW" link="/booking" main="SPACE" background={`url(${peanuts}`} position="topLeft" description="Visit the edge of space in our cutting edge craft." />
        <BackgroundImageSlide label="BUY NOW" link="/booking" main="ORBIT" background={`url(${peanuts}`} position="bottomLeft" description="Visit the edge of space in our cutting edge craft." />
        <BackgroundImageSlide label="BUY NOW" link="/booking" main="MOON" background={`url(${peanuts}`} position="bottomLeft" description="Visit the edge of space in our cutting edge craft." />
        <Footer />
      </>
    )
};
  
export default Destinations;