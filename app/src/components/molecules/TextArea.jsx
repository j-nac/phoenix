import {Header1, Tagline1, Subphrase1, BackgroundImageDescription, Quote, Author, Title} from "../atoms/Text";
import { ButtonOutlined1 } from "../atoms/Buttons";
import { Paragraph, ImageText } from "../atoms/Text"
import { ParagraphImage, DescribedImage } from "../atoms/Images"

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
            <hr className="text-white"/>
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

export {
    BackgroundImageLabel,
    QuoteArea,
    SlideParagraph,
    DescContainer,
    LeftImageText,
};