import { HamburgerIcon, MenuSelectPage, TopMenuSelect, LogoSelect } from "../atoms/Buttons"
import $ from "jquery";

function TopMenu(props) {
    return (
        <div className="sticky top-0 h-menu bg-black-glass z-50 items-end justify-around hidden md:flex pb-3 backdrop-blur-md">
            <LogoSelect label="LOGO HERE" link="/" />
            <TopMenuSelect label="SPACESHIPS" link="/ships" />
            <TopMenuSelect label="DESTINATIONS" link="/" />
            <TopMenuSelect label="TRAINING" link="/" />
            <TopMenuSelect label="ABOUT" link="/" />
            <TopMenuSelect label="FLY WITH US" link="/" />
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
        <div className='fixed w-screen h-12 z-50 flex justify-between flex-none px-16 top-2 min-w-slide md:hidden block'>
            <HamburgerIcon openMenu={clicked}  />
            <TopMenuSelect label={props.goLabel} link="/" />
        </div>
        <div className='fixed h-screen w-screen bg-black min-w-slide z-20 backdrop-blur-sm bg-opacity-75 closed md:hidden' id="menu-back" onClick={clicked}> </div>
        <div className='fixed h-screen w-1/3 bg-gradient-to-t from-black to-purple z-30 flex justify-end min-w-menu closed md:hidden' id="menu">
            <div className='h-1/2 flex justify-between flex-col w-3/4 mt-16'>
                <MenuSelectPage label="HOME" link="/"/>
                <MenuSelectPage label="SPACESHIPS" link="/ships"/>
                <MenuSelectPage label="DESTINATIONS" link="/destinations" />
                <MenuSelectPage label="TRAINING" link="/training" />
                <MenuSelectPage label="ABOUT" link="/about" />
            </div>
        </div>
    </>
    )
}
function Footer(){
    return (
    <div className="w-full bg-black p-8">
        <div className="flex justify-between">
            <div className="hidden sm:flex grow-0 align-center">
                <div className="w-32 h-32 bg-white">LOGO</div>
            </div>
            <div className="bg-pink grow sm:ml-8 p-6">
                <div className="flex flex-wrap mx-auto w-64 max-w-full justify-around">
                    <div className="w-8 h-8 bg-white"></div>
                    <div className="w-8 h-8 bg-white"></div>
                    <div className="w-8 h-8 bg-white"></div>
                    <div className="w-8 h-8 bg-white"></div>
                    <div className="w-8 h-8 bg-white"></div>
                </div>
            </div>
        </div>
        <div className="flex-wrap flex text-white justify-between">
            <p>Home Other Other Other</p><p>Copyright 2043 ASTRAL Technologies</p>
        </div>
    </div>
    )
}


export {
    TopMenu,
    HamburgerMenu,
    Footer,
}