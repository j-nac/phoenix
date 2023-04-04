import {Header1, Tagline1, Subphrase1, BackgroundImageDescription} from "../atoms/Text";
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

export {
    BackgroundImageLabel,
};