import { TitleBackgroundImageLabel, BackgroundImageLabel } from "../molecules/TextArea";
import { FullBackgroundImage } from "../atoms/Images";

function TitleSlide(props) {
    return (
    <div>
        <TitleBackgroundImageLabel main={props.main} sub={props.sub} position={props.position} />
        <FullBackgroundImage image={props.image} />
    </div>
    );
};

function BackgroundImageSlide(props) {
    return (
    <div>
        <FullBackgroundImage image={props.image} />
        <BackgroundImageLabel main={props.main} sub={props.sub} label={props.label} link={props.link} />
    </div>
    );
};

export {
    TitleSlide,
    BackgroundImageSlide,
};