import { useOnScreen } from "../Hooks/Text.jsx";

function Header1(props) {
    const reference = useOnScreen();
    return <h1 className='text-white text-9xl font-heading overflow-hidden' ref={reference}><span className="top-32 opacity-25 relative transition-all duration-500">{props.text}</span></h1>
}

function Tagline1(props) {
    const reference = useOnScreen();
    return <h2 className='text-white text-5xl font-heading overflow-hidden' ref={reference}><span className="top-32 opacity-25 relative transition-all duration-500">{props.text}</span></h2>
}

function Subphrase1(props) {
    const reference = useOnScreen();
    return <h3 className='text-white text-3xl font-paragraph overflow-hidden' ref={reference}><span className="top-32 opacity-25 relative transition-all duration-500">{props.text}</span></h3>
}

function BackgroundImageDescription(props){
    return (
        <p className="absolute top-1/2 -translate-y-1/2 right-12 text-white text-2xl max-w-[24rem] ml-12">{props.description}</p>
    )
}
function Quote(props){
    return <p className="text-xl lg:text-3xl xl:text-5xl text-white mt-4 font-paragraph">"{props.text}"</p>
}

function Author(props){
    return <p className="text-md lg:text-xl xl:text-3xl text-pink mt-4 font-paragraph">- {props.text}</p>
}

function Title(props){
    return <p className="text-sm lg:text-base xl:text-xl text-white ml-6 my-4 font-paragraph">{props.text}</p>
}
function QuoteHeader(props){
    return <h1 className="text-white text-center text-3xl md:text-9xl pt-2 mt-12 max-h-[20%] font-heading">{props.text}</h1>
}
function Subphrase2(props){
    return <h2 className="text-base pt-5 px-3 text-white font-paragraph">{props.text}</h2>
}
function Header2(props){
    return <h1 className="text-6xl px-3 text-white font-heading appear">{props.text}</h1>
}
function Paragraph(props){
    let text = [];
    props.text.forEach((e,i)=>{
        let classes = "font-paragraph text-sm md:text-xl text-white px-3 appear inline"
        if(i < props.text.length){classes += " mb-12"}
        text.push(<p className={classes} key={i}>{e}</p>); 
    })
    return <div className="min-h-48 after:clear-both after:block flex flex-col">{text}</div>
}

function Header3(props){
    return <h1 className="text-5xl px-3 text-white text-right font-heading appear">{props.text}</h1>
}

function ImageText(props){
    let cl = "text-sm font-paragraph md:text-base text-white md:w-1/4 px-2 py-4 appear"
    if(props.position === "top") cl += " mb-auto mt-4"
    else cl += " mt-auto mb-4"
    return <h1 className = {cl}>{props.text}</h1>
}
function Subphrase3(props){
    return <h2 className="text-lg pt-5 px-3 text-white font-paragraph text-right appear">{props.text}</h2>
}

function Header4(props){
    return <h1 className="inline-block text-5xl font-heading pr-3 text-white">{props.text}</h1>
}
function Subphrase4(props){
    return <p className="inline-block text-2xl font-heading px-4 text-white">{props.text}</p>
}

function DestinationPrice(props) {
    return <h2 className="text-2xl text-white">Price waaa {props.price}</h2>
}

function DestinationDescription(props) {
    return <p className="text-lg text-white">{props.desc}</p>
}

function FormInput(props) {
    return (
        <div className="block">
            <label className="block text-white">{props.label}</label>
            <input type={props.type} />
        </div>
    )
}

function FormSection(props) {
    return <h2 className="text-2xl text-white">{props.title}</h2>
}

export {
    Header1,
    Tagline1,
    Subphrase1,
    BackgroundImageDescription,
    Author,
    Title,
    Quote,
    QuoteHeader,
    Subphrase2,
    Header2,
    Paragraph,
    Header3,
    ImageText,
    Subphrase3,
    Header4,
    Subphrase4,
    DestinationPrice,
    DestinationDescription,
    FormInput,
    FormSection,
};