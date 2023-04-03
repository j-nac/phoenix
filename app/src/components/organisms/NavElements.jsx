import { HamburgerIcon, HomeIcon, ButtonOutlined2 } from "../atoms/Buttons"

function TopMenu(props) {
    return (
    <div className='fixed w-screen h-12 z-50 flex justify-between flex-none px-16 top-2 min-w-slide'>
        <HamburgerIcon openMenu={props.openMenu}  />
        <HomeIcon homeLink={props.homeLink} />
        <ButtonOutlined2 label={props.goLabel} />
    </div>
    )
}

function HamburgerMenu(props){
    return (
    <>
        <div className='fixed h-screen w-screen bg-black min-w-slide z-20 backdrop-blur-sm bg-opacity-75 closed' id="menu-back" onClick={props.clicked}> </div>
        <div className='fixed h-screen w-1/3 bg-purple z-30 flex items-center justify-end min-w-menu closed' id="menu">
            <div className='h-3/4 bg-white flex items-center w-3/4'>

            </div>
        </div>
    </>
    )
}


export {
    TopMenu,
    HamburgerMenu,
}