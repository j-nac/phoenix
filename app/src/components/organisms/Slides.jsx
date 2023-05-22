import { BackgroundImageLabel, QuoteArea, SlideParagraph, DescContainer, LeftImageText, DestinationCard, BookingForm, ImageCard } from "../molecules/TextArea";
import { QuoteImage, VideoBackGround } from "../molecules/ImageArea";
import { QuoteHeader, Header2, Subphrase2, Header3, Subphrase3, Paragraph} from "../atoms/Text"

function BackgroundImageSlide(props) {
    let classes = "bg-cover bg-no-repeat min-h-screen w-screen min-w-slide min-h-slide relative h-screen"
    if(props.fit === "menu"){
        classes += " md:h-screen-menu md:min-h-slide-menu"
    }
    return (
    <div className={classes} style={{"backgroundImage" : props.background}}>
        <div className="w-full h-full max-w-slide relative mx-auto">
            <BackgroundImageLabel main={props.main} tagline={props.tagline} sub={props.sub} label={props.label} link={props.link} position={props.position} description={props.description} />
        </div>
    </div>
    );
};
function QuoteSlide(props) {
    return (
    <div className="bg-black w-screen p-3 min-w-slide">
        <QuoteHeader text={props.header}/>
        <div className="flex items-center justify-around w-full items-stretch mt-6 mb-6 md:mt-12 md:mb-16 max-w-slide mx-auto">
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
            <div className="w-full h-full max-w-slide relative mx-auto">
                <BackgroundImageLabel main={props.main} tagline={props.tagline} sub={props.sub} label={props.label} link={props.link} position={props.position} description={props.description} />
            </div>
        </div>
    )
}
function TextSlide(props){
    return (
        <div className="w-screen min-w-slide relative bg-black px-[15%] py-5">
            <div className="w-full h-full max-w-slide relative mx-auto">
                <Subphrase2 text = {props.subheader} />
                <Header2 text = {props.header} />
                <SlideParagraph text={props.paragraph} src={props.src} />
            </div>
        </div>
    )
}
function ImageDescribedSlide(props){
    return (
        <div className="w-screen min-w-slide relative bg-black px-[15%] py-5">
            <div className="w-full h-full max-w-slide relative mx-auto">
                <Subphrase3 text = {props.subheader} />
                <Header3 text = {props.header} />
                <DescContainer text1 = {props.text1} text2 = {props.text2} src={props.src} />
            </div>
        </div>
    )
}
function LeftImageTextSlide(props){
    return(
        <div className="w-screen min-w-slide relative bg-black px-[15%] py-5">
            <div className="w-full h-full max-w-slide relative mx-auto">
                <Subphrase2 text={props.subphrase} />
                <Header2 text = {props.header} />
                <LeftImageText src={props.src} desc={props.desc}/>
            </div>
        </div>
    )
}
function CardsSlide(props){
    return(
        <div className="bg-black text-center w-screen min-w-slide">
            <Header2 text = {props.header}/>
            <div className="w-screen min-w-slide relative px-[15%] py-5 flex flex-wrap justify-center">
                <ImageCard src={props.src[0]} name={props.name[0]} desc={props.desc[0]}/>
                <ImageCard src={props.src[1]} name={props.name[1]} desc={props.desc[1]}/>
                <ImageCard src={props.src[2]} name={props.name[2]} desc={props.desc[2]}/>
                <ImageCard src={props.src[3]} name={props.name[3]} desc={props.desc[3]}/>
                <ImageCard src={props.src[4]} name={props.name[4]} desc={props.desc[4]}/>
                <ImageCard src={props.src[5]} name={props.name[5]} desc={props.desc[5]}/>
            </div>
        </div>
    )
}

function MapSlide(props){
    return (
        <div className="w-screen min-w-slide relative bg-black px-[15%] py-5">
            <div className="w-full h-full max-w-slide relative mx-auto">
                <Header2 text = {props.header} />
                <div className="flex flex-grow justify-between mt-6">
                    <Paragraph text={props.paragraph} />
                    <iframe className="w-96 h-96 border-0 float-right mx-8" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d68045.55238447482!2d-106.48733484641473!3d39.121613383735244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876a9eed65169f67%3A0x5f551784f65ce6d3!2sMt%20Massive!5e0!3m2!1sen!2sus!4v1684538335705!5m2!1sen!2sus" title="map" />
                </div>
            </div>
        </div>
    )
}

function DestinationSelect(props) {
    return (
        <div className="w-screen min-w-slide relative bg-black px-[15%] py-5">
            <div className="flex justify-center flex-wrap">
                <DestinationCard src={props.src[0]} price={props.price[0]} desc={props.desc[0]} forward={props.forward} destId={0} title="Space" />
                <DestinationCard src={props.src[1]} price={props.price[1]} desc={props.desc[1]} forward={props.forward} destId={1} title="Orbit" />
                <DestinationCard src={props.src[2]} price={props.price[2]} desc={props.desc[2]} forward={props.forward} destId={2} title="Moon" />
            </div>
        </div>
    )
}

function BookingInfoSlide(props) {
    return (
        <div className="w-screen min-w-slide relative bg-black px-[15%] py-5">
            <BookingForm updateInfo={props.updateInfo}/>
        </div> 
    )
}
function AgreementSlide(props){
    return (
        <div className="w-screen min-w-slide relative bg-black py-5">
            <div className="w-[75%] min-w-slide max-w-slide mx-auto relative bg-gray px-[5%] py-5 overflow-scroll max-h-screen">
                <h1 className="text-3xl">SAFETY AGREEMENT</h1>
                <hr></hr>
                <p>I, the undersigned, acknowledge that I have voluntarily chosen to participate in a space experience provided by Astral. I understand that space travel is an inherently risky activity and involves potential hazards, including but not limited to, loss of life, physical injury, illness, property damage, and emotional trauma.</p>
                <br />
                <p>In consideration of being allowed to participate in this space experience, I hereby assume all risks and release Astral, its officers, directors, employees, agents, and affiliates from any and all liability, claims, demands, actions, or causes of action arising out of my participation in this space tourism experience.</p>
                <br />
                <p>I certify that I am physically and mentally capable of participating in this activity and have no medical conditions that would prevent me from doing so. I understand that Astral has advised me to consult with a medical professional prior to participating in this activity.</p>
                <br />
                <p>I agree to comply with all safety instructions provided by Astral and its employees and understand that failure to do so may result in expulsion from the activity without refund.</p>
                <br />
                <p>I understand that this waiver of liability and assumption of risk is binding upon myself, my heirs, executors, and administrators.</p>
                <br />
                <p>I have read this waiver of liability and assumption of risk and fully understand its contents. I acknowledge thatI am signing this document voluntarily and without any inducement, assurance, or guarantee being made to me.</p>
                <br />
                <p>BY CLICKING CONTINUE, YOU AGREE TO THE ABOVE TERMS</p>
                <button onClick={props.advance} className="text-black px-4 py-2 text-xl border-solid border-black border-2 bg-current">CONTINUE</button>
            </div>
        </div>
    )
}
function ProgressBar(props){
    let classes = "transition-all w-full h-full bg-pink"
    if(props.current === 0) {
        classes += " scale-x-0"
    } else if (props.current === 1){
        classes += " scale-x-[.3333333]"
    } else if (props.current === 2){
        classes += " scale-x-[.6666667]"
    }
    return (
        <div className="w-screen min-w-slide bg-black py-5 px-[15%] bottom-0">
            <div className="w-full bg-gray h-2"><div className={classes}></div></div>
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
    CardsSlide,
    MapSlide,
    DestinationSelect,
    BookingInfoSlide,
    AgreementSlide,
    ProgressBar,
};