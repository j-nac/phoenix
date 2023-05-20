import { QuoteImg, BackgroundImage, BackgroundVideo, SocialLogo } from "../atoms/Images";

function QuoteImage(props){
    return (
        <div className="w-1/3 relative hidden md:block">
            <QuoteImg image={props.image}/>
        </div>
    )
}
function VideoBackGround(props){
    return (
        <>
            <BackgroundVideo file={props.file} altimg={props.altimg} />
            <BackgroundImage img={props.altimg} />
        </>
    )
}
function Socials(props){
    let socials = []
    Object.keys(props.socials).forEach((e,i)=>{
        socials.push(<SocialLogo key={i} href={e} src={props.socials[e]} />)
    })
    return(
        <div className="flex flex-wrap w-64 max-w-full justify-around mb-6">
            {socials}
        </div>
    )
}

export {
    QuoteImage,
    VideoBackGround,
    Socials,
}