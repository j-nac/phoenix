import { QuoteImg } from "../atoms/Images";

function QuoteImage(props){
    return (
        <div className="h-full w-1/3 relative hidden md:block">
            <QuoteImg image={props.image}/>
        </div>
    )
}
function VideoBackGround(props){
    return (
        <>
            <video className="h-screen w-screen min-w-slide min-h-slide absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 object-cover hidden sm:block" poster={props.altimg} autoPlay loop muted>
                <source src={props.file} type="video/mp4" />
            </video>
            <img className="h-screen w-screen min-w-slide min-h-slide absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 object-cover sm:hidden" src={props.altimg} alt=""/>
        </>
    )
}

export {
    QuoteImage,
    VideoBackGround,
}