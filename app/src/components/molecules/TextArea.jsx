import { Header1, Tagline1, Subphrase1, BackgroundImageDescription, Quote, Author, Title, DestinationPrice, DestinationDescription, FormInput, FormSection} from "../atoms/Text";
import { ButtonOutlined1, MetaLink } from "../atoms/Buttons";
import { Paragraph, ImageText } from "../atoms/Text"
import { ParagraphImage, DescribedImage, DestinationImage } from "../atoms/Images"

function BackgroundImageLabel(props) {
    let positioningClasses = "absolute";
    if (props.position === "bottomLeft") {
        positioningClasses += " bottom-12 left-12";
    } else if (props.position === "topLeft") {
        positioningClasses += " top-20 left-12";
    }
    else if (props.position === "bottomRight") {
        positioningClasses += " bottom-12 right-12";
    }

    return (
    <>
        <div className={positioningClasses}>
            <Subphrase1 text={props.sub} />
            <Tagline1 text={props.tagline} />
            <Header1 text={props.main} />
            {props.link ? <ButtonOutlined1 label={props.label} link={props.link} /> : null}
        </div>
        {props.description ? <BackgroundImageDescription description={props.description} /> : null}
    </>
    );
}

function QuoteArea(props){
    return (
        <div className="before:block before:h-2 after:block after:h-2 before:bg-white after:bg-white after:translate-y-full before:-translate-y-full pt-6 pb-6 w-1/2">
            <div className="flex flex-col justify-around">
                <Quote text={props.quote} />
                <div>
                    <Author text={props.author} />
                    <Title text={props.title} />
                </div>
            </div>
        </div>
    )
}

function SlideParagraph(props){
    return (
        <>
            <div className="flex justify-between py-6">
                <Paragraph text = {props.text} />
                <ParagraphImage src={props.src} />
            </div>
        </>
    )
}

function DescContainer(props){
    return (
        <div className="flex flex-col md:flex-row items-center py-8">
            <ImageText position="top" text={props.text1} />
            <DescribedImage src={props.src} />
            <ImageText position="bot" text={props.text2} />
        </div>
    )
}

function LeftImageText(props){
    return(
        <div className="flex justify-between py-6">
            <ParagraphImage src={props.src} />
            <Paragraph text={props.desc} />
        </div>
    )
}
function MetaLinks(props){
    return (
        <div className="flex justify-between mr-12 grow-1">
            <MetaLink text="TSA LINKS" link="/tsa" />
            <MetaLink text="TERMS OF SERVICE" link="/tsa" />
            <MetaLink text="COPYRIGHT" link="/tsa" />
        </div>
    )
}

function DestinationCard(props) {
    return (
        <div className="m-5 px-3 py-2 rounded-md flex flex-col items-center bg-high-black">
            <DestinationImage src={props.src} />
            <DestinationPrice price={props.price} />
            <div className="w-full h-1 bg-black"></div>
            <DestinationDescription desc={props.desc} />
            <button onClick={()=>props.forward(1,props.destId)} className="bg-white text-black p-1 font-paragraph text-2xl mt-3 mb-2 rounded-lg w-1/2">Buy Now</button>
        </div>
    )
}

function BookingForm(props) {
    return (
        <form onSubmit={(e)=>{e.preventDefault(); props.updateInfo(e)}}>
            <div className="flex flex-wrap justify-around">
                <div className="p-5">
                    <FormSection title="Contact" />
                    <FormInput label="First name" type="text" />
                    <FormInput label="Last name" type="text" />
                    <FormInput label="Email" type="text" />
                    <FormInput label="Phone number" type="text" />
                    <FormInput label="Country" type="text" />
                    <FormInput label="State/province" type="text" />
                    <FormInput label="Street address" type="text" />
                    <FormInput label="City" type="text" />
                    <FormInput label="Zip code" type="text" />
                </div>
                <div className="p-5">
                    <FormSection title="Billing" />
                    <FormInput label="Payment method" type="text" />
                    <FormInput label="Credit card number" type="text" />
                    <FormInput label="Security code" type="text" />
                    <FormInput label="Expiration" type="text" />
                </div>
            </div>

            <div className="flex justify-center"><input type={"submit"} name={"submit"} value="Buy Now" className="bg-white text-black p-2"/></div>
        </form>
    )
}

export {
    BackgroundImageLabel,
    QuoteArea,
    SlideParagraph,
    DescContainer,
    LeftImageText,
    MetaLinks,
    DestinationCard,
    BookingForm,
};