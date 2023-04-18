import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import logo from "../../images/logo-1.png"

// Learn more type button
function ButtonOutlined1(props) {
    return <a href={props.link} className="inline-block p-3 text-white text-2xl font-heading relative before:bg-blue before:absolute before:w-full before:top-0 before:left-0 before:h-full hover:before:border-4 before:transition-all before:border-0 overflow-hidden before:border-pink">{props.label}</a>
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
    return <a className='hover:before:[content:"➤"] hover:before:opacity-100 before:opacity-0 before:w-8 before:inline-block text-white before:transition-all before:relative before:right-10 hover:before:right-0 after:block after:h-1 after:w-3/4 after:bg-white hover:after:bg-pink transition-color text-3xl' href={props.link}>{props.label}</a>
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
}