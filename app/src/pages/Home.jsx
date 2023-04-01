import '../styles/home.css';
import peanuts from '../images/roasted-peanuts-jpg-1656535069.jpg';

const Home = () => {
    return <h1 className="text-3xl font-bold underline">
      <Menu />
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
    <div className='min-h-screen min-w-screen relative bg-black'>
      <div className='absolute bottom-12 left-12'>
        <p className='text-white relative top-6 text-4xl'>TOUCH THE STARS</p>
        <h1 className='text-white text-9xl'>ASTRAL</h1>
      </div>
    </div>
  )
}
function Menu(props){
  return(
    <div className='fixed w-screen h-12 z-10 flex justify-between flex-none px-4'>
      <p className='text-white text-4xl'>=</p>
      <p className='text-white text-4xl'>Logo</p>
      <p className='text-white text-4xl border-4 border-white px-1 hover:border-pink hover:text-pink transition-all'>FLY WITH US</p>
    </div>
  )
}
  
export default Home;