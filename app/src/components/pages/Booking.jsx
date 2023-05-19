import peanuts from "../../images/roasted-peanuts-jpg-1656535069.jpg";
import { DestinationSelect, BookingInfoSlide  } from "../organisms/Slides";
import { ConditionalRenderer } from "../organisms/Containers";
import { TopMenu, HamburgerMenu, Footer } from "../organisms/NavElements";
import { Header2 } from "../atoms/Text";
import { useState } from "react";

const Booking = () => {
  const [ current, setCurrent ] = useState(0)
  const [ destinationId, setDestination ] = useState(0)
  function updateDestination(i, choice){
    if(0 <= choice && choice < 3){
      setDestination(choice)
      setCurrent(current + i)
    }
  }
  return (
    <>
      <HamburgerMenu homeLink={"#root"} goLabel="FLY WITH US" />
      <TopMenu homeLink={"#root"} goLabel="FLY WITH US" />
      <ConditionalRenderer current={current} id={0}>
        <Header2 text="1. Select your destination"/>
        <DestinationSelect forward={updateDestination} src={[peanuts, peanuts, peanuts]} price={['230', '122', '979']} desc={['Wamen', 'hooha', 'a place to go']} />
      </ConditionalRenderer>
      <ConditionalRenderer current={current} id={1}>
        <BookingInfoSlide />
      </ConditionalRenderer>
      <Footer />
    </>
  )
};

/*

Todo:
- Use conditional rendering to show different parts of checkout
- Add progress react element at top to show which stage of checkout in
- Add times for booking
- Save entered info in state to generate confirm booking page
- Make it look good

*/

export default Booking;