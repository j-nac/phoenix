import { BackgroundImageLabel, QuoteArea, QuoteHeader } from "../molecules/TextArea";
import { QuoteImage } from "../molecules/ImageArea";

function BackgroundImageSlide(props) {
    return (
    <div className="bg-cover bg-no-repeat min-h-screen w-screen min-w-slide min-h-slide relative" style={{"backgroundImage" : props.background}}>
        <BackgroundImageLabel main={props.main} tagline={props.tagline} sub={props.sub} label={props.label} link={props.link} position={props.position} description={props.description} />
    </div>
    );
};
function QuoteSlide(props) {
    return (
    <div className="bg-black h-screen w-screen min-h-slide min-w-slide">
        <QuoteHeader text={props.header}/>
        <div className="flex items-center justify-around h-[90%] w-full">
            <QuoteImage image={props.image}/>
            <QuoteArea quote={props.quote} author={props.author} title={props.title} />
        </div>
    </div>
    );
};

export {
    BackgroundImageSlide,
    QuoteSlide,
};