import peanuts from "../../images/roasted-peanuts-jpg-1656535069.jpg";
import { VideoSlide, BackgroundImageSlide, QuoteSlide, DestinationSelect, BookingInfoSlide  } from "../organisms/Slides";
import { TopMenu, HamburgerMenu, Footer } from "../organisms/NavElements";
import { Header2 } from "../atoms/Text";

const Booking = () => {
  return (
    <>
      <HamburgerMenu homeLink={"#root"} goLabel="FLY WITH US" />
      <TopMenu homeLink={"#root"} goLabel="FLY WITH US" />
      <Header2 text="1. Select your destination"/>
      <DestinationSelect src={[peanuts, peanuts, peanuts]} price={['230', '122', '979']} desc={['Wamen', 'hooha', 'a place to go']} />
      <BookingInfoSlide />
    </>
  )
};

{/*

Todo:
- Use conditional rendering to show different parts of checkout
- Add progress react element at top to show which stage of checkout in
- Add times for booking
- Save entered info in state to generate confirm booking page
- Make it look good

*/}

export default Booking;