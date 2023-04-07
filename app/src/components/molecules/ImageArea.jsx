import { QuoteImg, BackgroundImage, BackgroundVideo } from "../atoms/Images";

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
            <BackgroundVideo file={props.file} altimg={props.altimg} />
            <BackgroundImage img={props.altimg} />
        </>
    )
}

export {
    QuoteImage,
    VideoBackGround,
}