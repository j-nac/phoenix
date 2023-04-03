import { BackgroundImageLabel } from "../molecules/TextArea";

function BackgroundImageSlide(props) {
    return (
    <div className="bg-cover bg-no-repeat min-h-screen min-w-screen relative" style={{"backgroundImage" : props.background}}>
        <BackgroundImageLabel main={props.main} tagline={props.tagline} sub={props.sub} label={props.label} link={props.link} position={props.position} />
    </div>
    );
};

export {
    BackgroundImageSlide,
};