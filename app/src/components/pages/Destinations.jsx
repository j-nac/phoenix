import "../../styles/home.css";
import space from "../../images/Space.mp4";
import space1 from "../../images/Optimized-benjamin-voros-phIFdC6lA4E-unsplash.jpg";
import space2 from "../../images/Optimized-max-mckinnon-c9OCWLka764-unsplash.jpg";
import moon from "../../images/Optimized-neven-krcmarek-3ym-ev0Pe58-unsplash.jpg";
import earth from "../../images/Optimized-nasa-Q1p7bh3SHj8-unsplash.jpg";
import { VideoSlide, BackgroundImageSlide, TextSlide  } from "../organisms/Slides";
import { TopMenu, HamburgerMenu, Footer } from "../organisms/NavElements";
import { useEffect } from "react";
const Destinations = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
    return (
      <>
        <HamburgerMenu homeLink={"#root"} goLabel="FLY WITH US" />
        <VideoSlide file={space} fit="menu" position="bottomLeft" main="DESTINATIONS" tagline="OH THE PLACES YOU'LL GO"/>
        <TopMenu homeLink={"#root"} goLabel="FLY WITH US" />
        <TextSlide header="SEE THE GALAXY" src={space1} paragraph={["At Astral, we offer a range of exciting space travel options for those who dream of venturing beyond our planet. Our primary package is a day trip aboard a space shuttle that takes you on a thrilling orbit around the Earth, providing a once-in-a-lifetime view of our planet from above. For our busy passengers, our space package allows passengers to visit space with minimal training required. For the ultimate space adventure, we offer a six-day trip where you will orbit the moon on a space station and have the opportunity to walk on the moon's surface on one of the days. These packages offer a unique opportunity for space enthusiasts to experience the wonder and excitement of space travel firsthand."]} />
        <BackgroundImageSlide label="BUY NOW" link="/phoenix/#/booking" main="SPACE" background={`url(${space2}`} position="topLeft" description="With our space travel package, passengers are taken to space for gorgeous views of our planet and galaxy. Minimal training required." />
        <BackgroundImageSlide label="BUY NOW" link="/phoenix/#/booking" main="ORBIT" background={`url(${earth}`} position="bottomLeft" description="Orbit around Earth in our luxury space station. Take a spacewalk accompanied by our experienced guides" />
        <BackgroundImageSlide label="BUY NOW" link="/phoenix/#/booking" main="MOON" background={`url(${moon}`} position="bottomLeft" description="Feel the lunar solid under your feet, leaving your imprint thousands of miles from home—an extraordinary experience bringing people closer to the stars." />
        <Footer />
      </>
    )
};
  
export default Destinations;