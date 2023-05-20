import { BackgroundImageLabel, QuoteArea, SlideParagraph, DescContainer, LeftImageText, DestinationCard, BookingForm } from "../molecules/TextArea";
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

function DestinationSelect(props) {
    return (
        <div className="w-screen min-w-slide relative bg-black px-[15%] py-5">
            <div className="flex justify-center flex-wrap">
                <DestinationCard src={props.src[0]} price={props.price[0]} desc={props.desc[0]} forward={props.forward} destId={0} title="One Orbit" />
                <DestinationCard src={props.src[1]} price={props.price[1]} desc={props.desc[1]} forward={props.forward} destId={1} title="Multi Orbit" />
                <DestinationCard src={props.src[2]} price={props.price[2]} desc={props.desc[2]} forward={props.forward} destId={2} title="Visit the Moon" />
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
            <div className="w-[75%] min-w-slide mx-auto relative bg-white px-[5%] py-5 overflow-scroll h-screen">
                <h1 className="text-3xl">SAFETY AGREEMENT</h1>
                <hr></hr>
                <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
                </p>
                <p>BY CLICKING CONTINUE, YOU AGREE TO THE ABOVE TERMS</p>
                <button onClick={props.advance} className="text-white bg-black">CONTINUE</button>
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
        <div className="w-screen min-w-slide relative bg-black py-5 px-[15%]">
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
    DestinationSelect,
    BookingInfoSlide,
    AgreementSlide,
    ProgressBar,
};