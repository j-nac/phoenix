import peanuts from "../../images/roasted-peanuts-jpg-1656535069.jpg";
import { DestinationSelect, BookingInfoSlide, AgreementSlide, TextSlide, ProgressBar, BackgroundImageSlide } from "../organisms/Slides";
import { ConditionalRenderer } from "../organisms/Containers";
import { TopMenu, HamburgerMenu, Footer } from "../organisms/NavElements";
import { Header2 } from "../atoms/Text";
import { useState } from "react";

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
      <BackgroundImageSlide main="BOOKING" background={`url(${peanuts}`} position="bottomLeft" fit="menu"/> 
      <TopMenu homeLink={"#root"} goLabel="FLY WITH US" />
      <ConditionalRenderer current={current} id={0}>
        <div className="w-full bg-black pt-2">
          <div className="max-w-slide mx-auto w-full">
            <Header2 text="1. Select your destination"/>
          </div>
        </div>
        <DestinationSelect forward={updateDestination} src={[peanuts, peanuts, peanuts]} price={['230', '122', '979']} desc={['Wamen pilot so you should buy', 'hooha awooha and some other words', 'a place to go when your feeling down']} />
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
        <TextSlide src={peanuts} header="Your Email Will Arrive Soon" paragraph={["At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.", "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.", "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo", "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem"]} />
      </ConditionalRenderer>
      <ProgressBar current={current} />
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