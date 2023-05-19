import { BackgroundImageLabel, QuoteArea, SlideParagraph, DescContainer, LeftImageText, ImageCard } from "../molecules/TextArea";
import { QuoteImage, VideoBackGround } from "../molecules/ImageArea";
import { QuoteHeader, Header2, Subphrase2, Header3, Subphrase3} from "../atoms/Text"

function BackgroundImageSlide(props) {
    return (
    <div className="bg-cover bg-no-repeat min-h-screen w-screen min-w-slide min-h-slide relative h-screen" style={{"backgroundImage" : props.background}}>
        <BackgroundImageLabel main={props.main} tagline={props.tagline} sub={props.sub} label={props.label} link={props.link} position={props.position} description={props.description} />
    </div>
    );
};
function QuoteSlide(props) {
    return (
    <div className="bg-black w-screen p-3 min-w-slide h-screen">
        <QuoteHeader text={props.header}/>
        <div className="flex items-center justify-around w-full items-stretch mt-6 mb-6 md:mt-12 md:mb-16">
            <QuoteImage image={props.image}/>
            <QuoteArea quote={props.quote} author={props.author} title={props.title} />
        </div>
    </div>
    );
};
function VideoSlide(props){
    let classes = "h-screen w-screen min-w-slide min-h-slide relative overflow-hidden"
    if(props.fit === "menu"){
        classes += " md:h-screen-menu md:min-h-slide-menu"
    }
    return (
        <div className={classes}>
            <VideoBackGround file={props.file} altimg={props.altimg} />
            <BackgroundImageLabel main={props.main} tagline={props.tagline} sub={props.sub} label={props.label} link={props.link} position={props.position} description={props.description} />
        </div>
    )
}
function TextSlide(props){
    return (
        <div className="w-screen min-w-slide relative bg-black px-[15%] py-5">
            <Subphrase2 text = {props.subheader} />
            <Header2 text = {props.header} />
            <SlideParagraph text={props.paragraph} src={props.src} />
        </div>
    )
}
function ImageDescribedSlide(props){
    return (
        <div className="w-screen min-w-slide relative bg-black px-[15%] py-5">
            <Subphrase3 text = {props.subheader} />
            <Header3 text = {props.header} />
            <DescContainer text1 = {props.text1} text2 = {props.text2} src={props.src} />
        </div>
    )
}
function LeftImageTextSlide(props){
    return(
        <div className="w-screen min-w-slide relative bg-black px-[15%] py-5">
            <Subphrase2 text={props.subphrase} />
            <Header2 text = {props.header} />
            <LeftImageText src={props.src} desc={props.desc}/>
        </div>
    )
}
function CardsSlide(props){
    return(
        <div className="text-center w-screen min-w-slide">
            <Header2 text = {props.header}/>
            <div className="w-screen min-w-slide relative bg-black px-[15%] py-5 flex flex-wrap justify-center">
                <ImageCard src={props.src1} desc={props.desc1}/>
                <ImageCard src={props.src2} desc={props.desc2}/>
                <ImageCard src={props.src3} desc={props.desc3}/>
                <ImageCard src={props.src4} desc={props.desc4}/>
                <ImageCard src={props.src5} desc={props.desc5}/>
                <ImageCard src={props.src6} desc={props.desc6}/>
            </div>
        </div>
    )
}



export {
    BackgroundImageSlide,
    QuoteSlide,
    VideoSlide,
    TextSlide,
    ImageDescribedSlide,
    LeftImageTextSlide,
    CardsSlide
};