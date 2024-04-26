import { Header1, Tagline1, Subphrase1, BackgroundImageDescription, Quote, Author, Title, CardText, DestinationPrice, DestinationDescription, FormInput, FormSection} from "../atoms/Text";
import { ButtonOutlined1, MetaLink } from "../atoms/Buttons";
import { Paragraph, ImageText, DistinationTitle } from "../atoms/Text"
import { ParagraphImage, DescribedImage, DestinationImage, CardImage } from "../atoms/Images"

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
            <MetaLink text="TSA INFO" link="/phoenix/#/info" />
            <MetaLink text="TERMS OF SERVICE" link="/phoenix/#/info" />
            <MetaLink text="COPYRIGHT" link="/phoenix/#/info" />
        </div>
    )
}

function DestinationCard(props) {
    return (
        <div className="m-5 px-3 py-2 w-64 flex flex-col items-center before:bg-transparent hover:before:bg-high-black relative before-bg text-white">
            <DestinationImage src={props.src} />
            <DistinationTitle text={props.title} />
            <DestinationDescription desc={props.desc} />
            <DestinationPrice price={props.price} />
            <button onClick={()=>props.forward(1,props.destId)} className="bg-purple p-1 font-paragraph text-2xl mt-3 mb-2 rounded-sm w-1/2">Buy Now</button>
        </div>
    )
}

function BookingForm(props) {
    return (
        <form onSubmit={(e)=>{e.preventDefault(); props.updateInfo(e)}}>
            <div className="flex flex-wrap justify-around max-w-slide mx-auto">
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

            <div className="flex justify-center">
                <input type={"submit"} name={"submit"} value="Buy Now" className="text-black p-2 font-paragraph bg-purple text-white text-2xl rounded-lg w-36"/>
                </div>
        </form>
    )
}

function ImageCard(props){
    return(
        <div className="rounded-md bg-high-black text-center w-1/4 mx-5 my-5 inline">
            <CardImage src={props.src} />
            <CardText text={props.name} />
            <Paragraph text={props.desc} />
        </div>
    )
}

export {
    BackgroundImageLabel,
    QuoteArea,
    SlideParagraph,
    DescContainer,
    LeftImageText,
    ImageCard,
    MetaLinks,
    DestinationCard,
    BookingForm,
};