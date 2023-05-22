function QuoteImg(props){
    return <img src={props.image} alt="" className="mx-auto my-auto absolute top-1/2 -translate-y-1/2 object-contain object-center w-full h-full"/>
}

function BackgroundVideo(props){
    return (
        <video className="h-screen w-screen min-w-slide min-h-slide absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 object-cover hidden sm:block" poster={props.altimg} autoPlay loop muted>
            <source src={props.file} type="video/mp4" />
        </video>
    )
}
function BackgroundImage(props){
    return <img className="h-screen w-screen min-w-slide min-h-slide absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 object-cover sm:hidden" src={props.img} alt=""/>
}

function ParagraphImage(props){
    return <img className="float-right w-48 mx-8 object-contain md:block hidden" src={props.src} alt=""/>
}

function DescribedImage(props){
    return <img src = {props.src} alt="" className="object-contain md:w-1/2" />
}
function FooterLogo(props){
    return (
        <img className="w-64 h-64 object-contain hidden lg:block" src={props.src} alt="" />
    )
}
function SocialLogo(props){
    return(
        <a href={props.href} className="w-12 h-12"><img className="w-full h-full" src={props.src} alt=""/></a>
    )
}

function DestinationImage(props) {
    return <img className="w-64 p-2 mb-4" src={props.src} alt="blah" />
}

function CardImage(props)
{
    return <img className="mx-auto rounded-full my-5 w-[75%] object-center md:block hidden" src={props.src} alt=""/>
}


export {
    QuoteImg,
    BackgroundVideo,
    BackgroundImage,
    ParagraphImage,
    DescribedImage,
    CardImage,
    FooterLogo,
    SocialLogo,
    DestinationImage,
}