import {Header1, Tagline1, Subphrase1, BackgroundImageDescription, Quote, Author, Title} from "../atoms/Text";
import { ButtonOutlined1 } from "../atoms/Buttons";

function BackgroundImageLabel(props) {
    let positioningClasses = "absolute";
    if (props.position === "bottomLeft") {
        positioningClasses += " bottom-12 left-12";
    } else if (props.position === "topLeft") {
        positioningClasses += " top-20 left-12";
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
        <div className="before:w-full before:h-2 after:w-full after:h-2 after:bg-white after:absolute relative after:bottom-20 before:bg-white before:absolute before:top-20 h-full lg:h-3/4 w-1/2">
            <div className="flex flex-col justify-between absolute top-28 h-1/2 md:h-1/3 w-full overflow-scroll">
                <Quote text={props.quote} />
                <div>
                    <Author text={props.author} />
                    <Title text={props.title} />
                </div>
            </div>
        </div>
    )
}
function QuoteHeader(props){
    return <h1 className="text-white text-center text-5xl md:text-7xl pt-6 max-h-[10%]">{props.text}</h1>
}

export {
    BackgroundImageLabel,
    QuoteArea,
    QuoteHeader,
};