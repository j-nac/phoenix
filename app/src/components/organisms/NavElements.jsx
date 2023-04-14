import { HamburgerIcon, HomeIcon, ButtonOutlined2, MenuSelectPage, TopMenuSelect } from "../atoms/Buttons"
import $ from "jquery";

function TopMenu(props) {
    return (
        <div className="sticky top-0 h-12 bg-black-glass z-50 backdrop-blur-lg flex items-center justify-around">
            <TopMenuSelect label="HOME" link="/" />
        </div>
    )
}

function HamburgerMenu(props){
    function clicked() {
        $("#menu").toggleClass("closed")
        $("#menu-back").toggleClass("closed")
        $("#open").toggleClass("hide")
        $("#close").toggleClass("hide")
    }
    return (
    <>
        <div className='fixed w-screen h-12 z-50 flex justify-between flex-none px-16 top-2 min-w-slide'>
            <HamburgerIcon openMenu={clicked}  />
            <HomeIcon homeLink={props.homeLink} />
            <ButtonOutlined2 label={props.goLabel} />
        </div>
        <div className='fixed h-screen w-screen bg-black min-w-slide z-20 backdrop-blur-sm bg-opacity-75 closed' id="menu-back" onClick={clicked}> </div>
        <div className='fixed h-screen w-1/3 bg-gradient-to-t from-black to-purple z-30 flex justify-end min-w-menu closed' id="menu">
            <div className='h-1/2 flex justify-between flex-col w-3/4 mt-16'>
                <MenuSelectPage label="Home" link="/"/>
                <MenuSelectPage label="Spaceships" link="/ships"/>
                <MenuSelectPage label="Destinations" link="/destinations" />
                <MenuSelectPage label="Training" link="/training" />
                <MenuSelectPage label="About" link="/about" />
            </div>
        </div>
    </>
    )
}


export {
    TopMenu,
    HamburgerMenu,
}