import { VideoSlide, TextSlide, ImageDescribedSlide, LeftImageTextSlide } from "../organisms/Slides";
import { TopMenu, HamburgerMenu, Footer } from "../organisms/NavElements";
import peanuts from "../../images/roasted-peanuts-jpg-1656535069.jpg";
import "../../styles/home.css";
const Ships = () => {
    return (
        <>
            <HamburgerMenu />
            <VideoSlide file="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" altimg={peanuts} main="SPACESHIPS" tagline="Ride in Comfort" position="bottomLeft" fit="menu"/>
            <TopMenu homeLink={"#root"} goLabel="FLY WITH US" />
            <TextSlide src={peanuts} subheader="Groundbreaking Technology" header="Ascend Class Ships" paragraph={["The Ascend Class fleet embodies the pinnacle of space exploration, featuring a collection of sleek and technologically advanced spaceships. With their aerodynamic designs powered by the Leviathan 3 engines, Ascend Class vessels offer unparalleled speed, efficiency, and maneuverability. Equipped with cutting-edge navigation, communication, and life support systems, these spacecraft ensure the utmost safety and comfort for interstellar journeys, elevating the boundaries of human exploration to new heights. The Ascend Class fleet stands as a testament to the ingenuity and determination of mankind, ready to ascend beyond the Earth's atmosphere and venture into the uncharted realms of the cosmos."]} />
            <div className="bg-black w-full"><div className="w-full max-w-slide mx-auto"><div className="mx-auto w-2/3 bg-white h-[2px]"/></div></div>
            <ImageDescribedSlide src={peanuts} subheader="Next gen" header="leviathan 3 engines" text1="Cutting-edge power system combining solar and nuclear energy technologies to maximize efficiency while being environmentally friendly and versatile. Built and tested to navigate through extreme temperatures and pressures, pushing the boundaries of exploration." text2="Innovative closed-loop propulsion system, enabling it for maximum efficiency. Unparalleled lightweight design." />
            <div className="bg-black w-full"><div className="w-full max-w-slide mx-auto"><div className="mx-auto w-2/3 bg-white h-[2px]"/></div></div>
            <LeftImageTextSlide header="COACHES" subphrase="FIRST CLASS COMFORT" src={peanuts} desc={["Arriving at our futuristic space station, situated in orbit around the moon, you'll be greeted by the ultimate dream destination for adventure seekers and space enthusiasts. Immerse yourself in sheer luxury within the station's most exquisite accommodations, where every detail has been meticulously crafted to provide unrivaled comfort. Feast your eyes on breathtaking views of the moon and Earth from above, while indulging in a wealth of state-of-the-art entertainment facilities. Engage in zero-gravity sports, experience captivating virtual reality simulators, or simply bask in the awe-inspiring surroundings. With artificial gravity ensuring your safety and comfort, you can freely move throughout the station, preparing for awe-inspiring lunar excursions that offer an up-close encounter with the moon's natural wonders. And when it's time to satisfy your taste buds, our station's restaurant and bar await, offering gourmet space cuisine and handcrafted cocktails that will create an unforgettable dining experience. Escape the ordinary and embark on a truly extraordinary adventure with our luxurious ship and space station package, where innovation, comfort, and indulgence merge to redefine the possibilities of space tourism."]} />
            <Footer />
        </>
    )
};
  
export default Ships;