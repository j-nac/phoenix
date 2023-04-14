import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import logo from "../../images/logo-1.png"

// Learn more type button
function ButtonOutlined1(props) {
    return <a href={props.link} className="inline-block border-4 p-3 text-white text-2xl font-heading hover:text-pink hover:border-pink transition-all">{props.label}</a>
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
    return <p className='text-white text-4xl hover:text-pink transition-all' onClick={props.openMenu}><FontAwesomeIcon icon={faBars} id="open"/><FontAwesomeIcon icon={faX} id="close" className="hide"/></p>
}

function MenuSelectPage(props) {
    return <a className='hover:before:[content:"➤"] hover:before:opacity-100 before:opacity-0 before:w-8 before:inline-block text-white before:transition-all before:relative before:right-10 hover:before:right-0 after:block after:h-1 after:w-3/4 after:bg-white hover:text-pink transition-color text-3xl' href={props.link}>{props.label}</a>
}

function HomeIcon(props) {
    return <a className='text-white text-4xl' href={props.homeLink}><img src={logo} alt="" className="h-16"/></a>
}

export {
    ButtonOutlined1,
    ButtonOutlined2,
    HamburgerIcon,
    MenuSelectPage,
    HomeIcon,
}