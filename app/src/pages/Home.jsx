import '../styles/home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faX } from '@fortawesome/free-solid-svg-icons'
import peanuts from '../images/roasted-peanuts-jpg-1656535069.jpg';
import logo from '../images/logo-1.png';

import $ from 'jquery';

const Home = () => {
    return <h1 className="text-3xl font-bold underline">
      <NavBar openMenu={clicked} />
      <Menu clicked={clicked}/>
      <Title image={peanuts} />
      <Slide1 image={peanuts} />
      <Slide1 image={peanuts} />
    </h1>;
};

function clicked(){
  $("#menu").toggleClass("closed")
  $("#menu-back").toggleClass("closed")
  $("#open").toggleClass("hide")
  $("#close").toggleClass("hide")
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
      <p className='text-white text-4xl hover:text-pink transition-all' onClick={props.openMenu}><FontAwesomeIcon icon={faBars} id="open"/><FontAwesomeIcon icon={faX} id="close" className="hide"/></p>
      <a className='text-white' href="#root"><img className="h-24" src={logo} alt=""/></a>
      <p className='px-1 transition-all text-white text-lg relative hover:text-pink hover:before:clip-in before:clip-out before:bg-white flex justify-center items-center before:rounded-sm'>
        <span className='relative z-60 align-middle inline-block'>FLY WITH US</span>
      </p>
    </div>
  )
}

function Menu(props){
  return(
    <>
      <div className='fixed h-screen w-screen bg-black min-w-slide z-20 backdrop-blur-sm bg-opacity-75 closed' id="menu-back" onClick={props.clicked}> </div>
      <div className='fixed h-screen w-1/3 bg-purple z-30 flex justify-end min-w-menu closed' id="menu">
        <div className='h-2/3 flex justify-between flex-col w-3/4 mt-16'>
          <p className='hover:before:[content:"🡆"] hover:before:opacity-100 before:opacity-0 before:w-8 before:inline-block text-white before:transition-all before:relative before:right-10 hover:before:right-0 after:block after:h-1 after:w-3/4 after:bg-white hover:text-pink transition-color'>Home</p>
          <p className='hover:before:[content:"🡆"] hover:before:opacity-100 before:opacity-0 before:w-8 before:inline-block text-white before:transition-all before:relative before:right-10 hover:before:right-0 after:block after:h-1 after:w-3/4 after:bg-white hover:text-pink transition-color'>Spacecraft</p>
          <p className='hover:before:[content:"🡆"] hover:before:opacity-100 before:opacity-0 before:w-8 before:inline-block text-white before:transition-all before:relative before:right-10 hover:before:right-0 after:block after:h-1 after:w-3/4 after:bg-white hover:text-pink transition-color'>Destinations</p>
          <p className='hover:before:[content:"🡆"] hover:before:opacity-100 before:opacity-0 before:w-8 before:inline-block text-white before:transition-all before:relative before:right-10 hover:before:right-0 after:block after:h-1 after:w-3/4 after:bg-white hover:text-pink transition-color'>Training</p>
          <p className='hover:before:[content:"🡆"] hover:before:opacity-100 before:opacity-0 before:w-8 before:inline-block text-white before:transition-all before:relative before:right-10 hover:before:right-0 after:block after:h-1 after:w-3/4 after:bg-white hover:text-pink transition-color'>Safety</p>
          <p className='hover:before:[content:"🡆"] hover:before:opacity-100 before:opacity-0 before:w-8 before:inline-block text-white before:transition-all before:relative before:right-10 hover:before:right-0 after:block after:h-1 after:w-3/4 after:bg-white hover:text-pink transition-color'>About</p>
        </div>
      </div>
    </>
  )
}
  
export default Home;