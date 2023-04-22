import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import logo from "../../images/logo-1.png"

// Learn more type button
function ButtonOutlined1(props) {
    return <a href={props.link} className="inline-block text-white hover:before:text-pink hover:after:text-pink before:ease-in-out after:ease-in-out py-3 px-5 text-2xl font-heading relative before:absolute before:-left-[5px] before:-top-[5px] before:border-t-4 before:border-l-4 before:w-1/2 before:h-1/2 hover:before:h-[calc(100%+10px)] hover:before:w-[calc(100%+10px)] before:transition-all after:absolute after:-right-[5px] after:-bottom-[5px] after:border-b-4 after:border-r-4 after:w-1/2 after:h-1/2 hover:after:h-[calc(100%+10px)] hover:after:w-[calc(100%+10px)] after:transition-all hover:before:rounded-tl-lg hover:after:rounded-br-lg">{props.label}</a>
}

function LogoSelect(props) {
    return <a href={props.link} className="text-2xl text-white font-paragraphing">{props.label}</a>
}

// Menu fly with us type button
function ButtonOutlined2(props) {
    return (
    <p className='px-3 transition-all text-white text-xl relative hover:text-pink hover:before:clip-in before:clip-out before:bg-white flex justify-center items-center before:rounded-sm'>
        <span className='relative z-60 align-middle inline-block'>{props.label}</span>
    </p>
    )
}

function HamburgerIcon(props) {
    return <p className='text-white text-4xl transition-all' onClick={props.openMenu}><FontAwesomeIcon icon={faBars} id="open"/><FontAwesomeIcon icon={faX} id="close" className="hide"/></p>
}

function MenuSelectPage(props) {
    return <a className='text-white before:z-[-1] before:absolute before:h-0 before:w-3/4 before:bottom-0 before:bg-pink hover:before:h-full before:transition-all after:z-[-1] py-2 after:block after:h-1 after:w-3/4 after:bg-white after:bottom-0 hover:after:bottom-full hover:after:translate-y-full after:transition-all after:absolute relative transition-color text-3xl' href={props.link}>{props.label}</a>
}

function HomeIcon(props) {
    return <a className='text-white text-4xl' href={props.homeLink}><img src={logo} alt="" className="h-16"/></a>
}

function TopMenuSelect(props){
    return <a className="text-white font-paragraph text-xl after:h-1 after:w-full after:bg-pink after:block after:scale-x-0 hover:after:scale-x-100 after:origin-right hover:after:origin-left after:transition-transform" href={props.link}>{props.label}</a>
}

export {
    ButtonOutlined1,
    ButtonOutlined2,
    HamburgerIcon,
    MenuSelectPage,
    HomeIcon,
    TopMenuSelect,
    LogoSelect,
}