import "../../styles/home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import peanuts from "../../images/roasted-peanuts-jpg-1656535069.jpg";
import { BackgroundImageSlide  } from "../organisms/Slides";

import $ from "jquery";

const Home = () => {
    return <h1 className="text-3xl font-bold underline">
      <NavBar openMenu={clicked} />
      <Menu clicked={clicked}/>
      <BackgroundImageSlide main="ASTRAL" tagline="TOUCH THE STARS" image={peanuts} position="bottomLeft" />
      <BackgroundImageSlide main="SPACESHIPS" sub="Ride in Comfort" label="LEARN MORE" link="/" image={peanuts} position="bottomLeft" />
      <BackgroundImageSlide main="DESTINATIONS" label="LEARN MORE" link="/" image={peanuts} position="topLeft" />
    </h1>;
};

function clicked(){
  $("#menu").toggleClass("closed")
  $("#menu-back").toggleClass("closed")
  $("#open").toggleClass("hide")
  $("#close").toggleClass("hide")
}

function NavBar(props){
  return(
    <div className='fixed w-screen h-12 z-50 flex justify-between flex-none px-16 top-2 min-w-slide'>
      <p className='text-white text-4xl hover:text-pink transition-all' onClick={props.openMenu}><FontAwesomeIcon icon={faBars} id="open"/><FontAwesomeIcon icon={faX} id="close" className="hide"/></p>
      <a className='text-white text-4xl' href="#root">Logo</a>
      <p className='px-3 transition-all text-white text-xl relative hover:text-pink hover:before:clip-in before:clip-out before:bg-white flex justify-center items-center before:rounded-sm'>
        <span className='relative z-60 align-middle inline-block'>FLY WITH US</span>
      </p>
    </div>
  )
}

function Menu(props){
  return(
    <>
      <div className='fixed h-screen w-screen bg-black min-w-slide z-20 backdrop-blur-sm bg-opacity-75 closed' id="menu-back" onClick={props.clicked}> </div>
      <div className='fixed h-screen w-1/3 bg-purple z-30 flex items-center justify-end min-w-menu closed' id="menu">
        <div className='h-3/4 bg-white flex items-center w-3/4'>

        </div>
      </div>
    </>
  )
}
  
export default Home;