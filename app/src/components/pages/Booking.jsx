import Rocket from "../../images/martin-jaros-osAeymdDVyk-unsplash.jpg";
import { DestinationSelect, BookingInfoSlide, AgreementSlide, TextSlide, ProgressBar } from "../organisms/Slides";
import { ConditionalRenderer } from "../organisms/Containers";
import { TopMenu, HamburgerMenu, Footer } from "../organisms/NavElements";
import { Header2 } from "../atoms/Text";
import { useState } from "react";
import Space from "../../images/ivana-cajina-asuyh-_ZX54-unsplash.jpg";
import Orbit from "../../images/nasa-yZygONrUBe8-unsplash.jpg";
import Moon from "../../images/chuttersnap-pE8WW245aik-unsplash.jpg";

const Booking = () => {
  const [ current, setCurrent ] = useState(0)
  const [ destinationId, setDestination ] = useState(0)
  const [ personalInfo, sellData ] = useState([])
  function updateDestination(i, choice){
    if(0 <= choice && choice < 3){
      setDestination(choice)
      setCurrent(current + i)
    }
  }
  function updateInfo(e){
    sellData([...e.target.querySelectorAll("input[type=text]")].map(e=>[e.name,e.value]))
    setCurrent(current + 1)
  }
  function advance(){
    setCurrent(current+1)
  }
  function back(){
    setCurrent(current-1)
  }
  return (
    <>
      <HamburgerMenu homeLink={"#root"} goLabel="FLY WITH US" />
      <TopMenu homeLink={"#root"} goLabel="FLY WITH US" />
      <ProgressBar current={current} />
      <ConditionalRenderer current={current} id={0}>
        <div className="w-full bg-black pt-2">
          <div className="max-w-slide mx-auto w-full">
            <Header2 text="1. Select your destination"/>
          </div>
        </div>
        <DestinationSelect forward={updateDestination} src={[Space, Orbit, Moon]} price={['5', '20', '70']} desc={['Explore space, get incredible views of Earth, and feel zero gravity.', 'Experience our luxury space station and go on spacewalks.', 'Take a leap and feel the lunar soil under your feet.']} />
      </ConditionalRenderer>
      <ConditionalRenderer current={current} id={1}>
        <div className="w-full bg-black pt-2">
          <div className="max-w-slide mx-auto w-full">
            <Header2 text="2. Read the Agreement"/>
            <button onClick={back} className="text-white p-3 text-2xl">Back</button>
          </div>
        </div>
        <AgreementSlide advance={advance}/>
      </ConditionalRenderer>
      <ConditionalRenderer current={current} id={2}>
        <div className="w-full bg-black pt-2">
          <div className="max-w-slide mx-auto w-full">
            <Header2 text="3. Enter your Details"/>
            <button onClick={back} className="text-white p-3 text-2xl">Back</button>
          </div>
        </div>
        <BookingInfoSlide updateInfo={updateInfo} />
      </ConditionalRenderer>
      <ConditionalRenderer current={current} id={3}>
        <TextSlide src={Rocket} header="Your Email Will Arrive Soon" paragraph={["	Thank you for booking with Astral, we hope it's been a seamless experience!", "Before you complete your checkout please be sure to review your itinerary details, verify the accuracy of travel dates, and passenger details. If you need any assistance our customer support team is always available to help you, please don’t hesitate to reach out.", "Once you have completed this checkout process you will receive an email confirming all of your booking information. Keep this email for reference and present it upon arrival at our facilities.", "Please note that all bookings are subject to our terms and conditions which can be reviewed on our website.", "We’re thrilled to embark on this extraordinary journey alongside you. Look forward to creating unforgettable memories in the cosmos!"]} />
      </ConditionalRenderer>
      <Footer placeHolder={[destinationId, personalInfo]} />
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