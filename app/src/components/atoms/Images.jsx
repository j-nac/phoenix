function QuoteImg(props){
    return <img src={props.image} alt="" className="max-w-full max-h-full mx-auto my-auto absolute top-1/2 -translate-y-1/2"/>
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

export {
    QuoteImg,
    BackgroundVideo,
}