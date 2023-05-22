import { HamburgerIcon, MenuSelectPage, TopMenuSelect, LogoSelect } from "../atoms/Buttons"
import { Copyright } from "../atoms/Text"
import { FooterLogo } from "../atoms/Images"
import { Socials } from "../molecules/ImageArea"
import { MetaLinks } from "../molecules/TextArea"
import facebook from "../../images/icons8-facebook-48.png"
import instagram from "../../images/icons8-instagram-48.png"
import twitter from "../../images/icons8-twitter-48.png"
import youtube from "../../images/icons8-youtube-48.png"
import logo from "../../images/icon.png"
import $ from "jquery";

function TopMenu(props) {
    return (
        <div className="sticky top-0 h-menu bg-black-glass z-50 items-end justify-around hidden md:flex backdrop-blur-md flex items-center">
            <LogoSelect label="LOGO HERE" link="/" />
            <TopMenuSelect label="SPACESHIPS" link="/#/ships" />
            <TopMenuSelect label="DESTINATIONS" link="/#/destinations" />
            <TopMenuSelect label="TRAINING" link="/#/training" />
            <TopMenuSelect label="ABOUT" link="/#/about" />
            <TopMenuSelect label="FLY WITH US" link="/#/booking" />
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
                <MenuSelectPage label="SPACESHIPS" link="/#/ships"/>
                <MenuSelectPage label="DESTINATIONS" link="/#/destinations" />
                <MenuSelectPage label="TRAINING" link="/#/training" />
                <MenuSelectPage label="ABOUT" link="/#/about" />
            </div>
        </div>
    </>
    )
}
function Footer(props){
    return (
    <div className="w-full min-w-slide bg-off-black p-8">
        <div className="flex justify-between py-4 md:px-16 px-6">
            <FooterLogo src={logo}/>
            <div className="grow sm:ml-8 p-4 flex flex-col items-center justify-around">
                <Socials socials={{"https://www.facebook.com/":facebook,"https://www.instagram.com/":instagram, "https://twitter.com/":twitter, "https://www.youtube.com/":youtube}} />
                <div className="flex justify-center flex-wrap w-full lg:w-3/4">
                    <TopMenuSelect label="HOME" link="/" mx="1" />
                    <TopMenuSelect label="SPACESHIPS" link="/#/ships" mx="1" />
                    <TopMenuSelect label="DESTINATIONS" link="/#/destinations" mx="1" />
                    <TopMenuSelect label="TRAINING" link="/#/training" mx="1" />
                    <TopMenuSelect label="ABOUT" link="/#/about" mx="1" />
                    <TopMenuSelect label="BUY NOW" link="/#/booking" mx="1" />
                </div>
            </div>
        </div>
        <div className="flex-wrap flex text-white justify-between">
            <MetaLinks />
            <Copyright />
        </div>
    </div>
    )
}


export {
    TopMenu,
    HamburgerMenu,
    Footer,
}