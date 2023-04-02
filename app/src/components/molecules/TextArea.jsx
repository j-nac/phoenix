import {Header1, Subheader1, Header2, Subheader2} from "../atoms/Text";
import { ButtonOutlined1 } from "../atoms/Buttons";

function TitleBackgroundImageLabel(props) {
    let positioningClasses = "absolute";
    if (props.position === "bottomLeft") {
        positioningClasses += " bottom-12 left-12"
    }
    
    return (
    <div className={positioningClasses}>
        <Subheader1 text={props.sub} />
        <Header1 text={props.main} />
    </div>
    )
};

function BackgroundImageLabel(props) {
    return (
    <div>
        <Subheader2 text={props.sub} />
        <Header2 text={props.main} />
        <ButtonOutlined1 label={props.label} link={props.link} />
    </div>
    );
};

export {
    TitleBackgroundImageLabel,
    BackgroundImageLabel,
};