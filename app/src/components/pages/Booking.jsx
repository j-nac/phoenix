import peanuts from "../../images/roasted-peanuts-jpg-1656535069.jpg";
import { VideoSlide, BackgroundImageSlide, QuoteSlide, DestinationSelect  } from "../organisms/Slides";
import { TopMenu, HamburgerMenu, Footer } from "../organisms/NavElements";
import { Header2 } from "../atoms/Text";

const Booking = () => {
  return (
    <>
      <HamburgerMenu homeLink={"#root"} goLabel="FLY WITH US" />
      <TopMenu homeLink={"#root"} goLabel="FLY WITH US" />
      <Header2 text="1. Select your destination"/>
      <DestinationSelect src={[peanuts, peanuts, peanuts]} price={['230', '122', '979']} desc={['Wamen', 'hooha', 'a place to go']} />
    </>
  )
};
  
export default Booking;