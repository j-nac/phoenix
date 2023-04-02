import '../styles/home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import peanuts from '../images/roasted-peanuts-jpg-1656535069.jpg';

import $ from 'jquery';

const Home = () => {
    return <h1 className="text-3xl font-bold underline">
      <NavBar openMenu={clicked} />
      <Menu />
      <Title image={peanuts} />
      <Slide1 image={peanuts} />
      <Slide1 image={peanuts} />
    </h1>;
};

function clicked(){
  $("#menu").toggleClass("closed")
  $("#menu-back").toggleClass("closed")
}

function Slide1(props){
  return (
    <div className="bg-cover bg-no-repeat min-h-screen min-w-screen" style={{"backgroundImage" : `url(${props.image}`}}>

    </div>
  )
}

function Title(props){
  return(
    <div className='min-h-screen min-w-screen relative bg-black min-w-slide'>
      <div className='absolute bottom-12 left-12'>
        <p className='text-white relative top-6 text-4xl'>TOUCH THE STARS</p>
        <h1 className='text-white text-9xl'>ASTRAL</h1>
      </div>
    </div>
  )
}
function NavBar(props){
  return(
    <div className='fixed w-screen h-12 z-50 flex justify-between flex-none px-16 top-2 min-w-slide'>
      <p className='text-white text-4xl' onClick={props.openMenu}><FontAwesomeIcon icon={faBars}/></p>
      <p className='text-white text-4xl'>Logo</p>
      <p className='px-3 active:text-pink transition-all text-white text-xl relative hover:after:clip-in active:before:clip-in before:clip-out before:bg-white active:after:border-pink after:clip-out after:border-4 after:border-white flex justify-center items-center'>
        <span className='relative z-60 align-middle inline-block'>FLY WITH US</span>
      </p>
    </div>
  )
}

function Menu(props){
  return(
    <>
      <div className='fixed h-screen w-screen bg-black min-w-slide z-20 backdrop-blur-sm bg-opacity-75 closed' id="menu-back"> </div>
      <div className='fixed h-screen w-1/3 bg-purple z-30 flex items-center justify-end min-w-menu closed' id="menu">
        <div className='h-3/4 bg-white flex items-center w-3/4'>

        </div>
      </div>
    </>
  )
}
  
export default Home;