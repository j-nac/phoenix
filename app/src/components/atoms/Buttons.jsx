import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

// Learn more type button
function ButtonOutlined1(props) {
    return <a href={props.link} className="inline-block border-4 p-3 text-white text-2xl font-heading">{props.label}</a>
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

function HomeIcon(props) {
    return <a className='text-white text-4xl' href={props.homeLink}>Logo</a>
}

export {
    ButtonOutlined1,
    ButtonOutlined2,
    HamburgerIcon,
    HomeIcon,
}