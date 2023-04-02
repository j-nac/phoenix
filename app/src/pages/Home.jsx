import '../styles/home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import peanuts from '../images/roasted-peanuts-jpg-1656535069.jpg';

const Home = () => {
    return <h1 className="text-3xl font-bold underline">
      <NavBar openMenu={()=>{console.log("clicked")}} />
      <Title image={peanuts} />
      <Slide1 image={peanuts} />
      <Slide1 image={peanuts} />
    </h1>;
};

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
    <div className='fixed w-screen h-12 z-10 flex justify-between flex-none px-4 top-2 min-w-slide'>
      <p className='text-white text-4xl' onClick={props.openMenu()}><FontAwesomeIcon icon={faBars}/></p>
      <p className='text-white text-4xl'>Logo</p>
      <p className='px-3 active:text-pink transition-all text-white text-xl relative hover:before:clip-in active:before:border-pink before:clip-out before:border-4 before:border-white flex justify-center items-center'>
        <span className='align-middle inline-block'>FLY WITH US</span>
      </p>
    </div>
  )
}
  
export default Home;