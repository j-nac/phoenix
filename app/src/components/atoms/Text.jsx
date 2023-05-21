import { useOnScreen } from "../Hooks/Text.jsx";
import {useState} from "react"

function Header1(props) {
    const reference = useOnScreen();
    return <h1 className='text-white text-9xl font-heading overflow-hidden' ref={reference}><span className="top-32 opacity-25 relative transition-all duration-500">{props.text}</span></h1>
}

function Tagline1(props) {
    const reference = useOnScreen();
    return <h2 className='text-light-gray text-5xl font-heading overflow-hidden' ref={reference}><span className="top-32 opacity-25 relative transition-all duration-500">{props.text}</span></h2>
}

function Subphrase1(props) {
    const reference = useOnScreen();
    return <h3 className='text-light-gray text-3xl font-paragraph overflow-hidden' ref={reference}><span className="top-32 opacity-25 relative transition-all duration-500">{props.text}</span></h3>
}

function BackgroundImageDescription(props){
    return (
        <p className="absolute top-1/2 -translate-y-1/2 right-12 text-light-gray text-2xl max-w-[24rem] ml-12">{props.description}</p>
    )
}
function Quote(props){
    return <p className="text-xl lg:text-3xl xl:text-5xl text-white mt-4 font-paragraph">"{props.text}"</p>
}

function Author(props){
    return <p className="text-md lg:text-xl xl:text-3xl text-pink mt-4 font-paragraph">- {props.text}</p>
}

function Title(props){
    return <p className="text-sm lg:text-base xl:text-xl text-purple ml-6 my-4 font-paragraph">{props.text}</p>
}
function QuoteHeader(props){
    return <h1 className="text-white text-center text-6xl md:text-9xl pt-2 mt-12 font-heading">{props.text}</h1>
}
function Subphrase2(props){
    return <h2 className="text-base pt-5 px-3 text-light-gray font-paragraph">{props.text}</h2>
}
function Header2(props){
    return <h1 className="text-6xl px-3 text-white font-heading appear">{props.text}</h1>
}
function Paragraph(props){
    let text = [];
    props.text.forEach((e,i)=>{
        let classes = "font-paragraph text-sm md:text-xl text-light-gray px-5 md:px-10 appear inline"
        if(i < props.text.length){classes += " mb-12"}
        text.push(<p className={classes} key={i}>{e}</p>); 
    })
    return <div className="min-h-48 after:clear-both after:block flex flex-col">{text}</div>
}

function Header3(props){
    return <h1 className="text-5xl px-3 text-white text-right font-heading appear">{props.text}</h1>
}

function ImageText(props){
    let cl = "text-sm font-paragraph md:text-base text-light-gray md:w-1/4 px-2 py-4 appear"
    if(props.position === "top") cl += " mb-auto mt-4"
    else cl += " mt-auto mb-4"
    return <h1 className = {cl}>{props.text}</h1>
}
function Subphrase3(props){
    return <h2 className="text-lg pt-5 px-3 text-light-gray font-paragraph text-right appear">{props.text}</h2>
}

function Header4(props){
    return <h1 className="inline-block text-5xl font-heading pr-3 text-white">{props.text}</h1>
}
function Subphrase4(props){
    return <p className="inline-block text-2xl font-heading px-4 text-light-gray">{props.text}</p>
}

function CardText(props){
    return <p className="font-paragraph text-3xl text-white px-3 min-h-48 after:clear-both after:block appear">{props.text}</p>
}

function Copyright(props){
    return <p className="p-1 block text-sm text-gray grow-0">Copyright 2043 ASTRAL Technologies</p>
}
function DestinationPrice(props) {
    const [ amount, setAmount ] = useState(1)
    function update(event){
        setAmount(event.target.value)
    }
    return <div className="flex justify-between w-2/3">
        <input type="number" className="bg-transparent grow-0 w-16" value={amount} min={1} max={10} onChange={update} />
        <h2 className="text-2xl p-3">${props.price * amount}</h2>
    </div>
}

function DestinationDescription(props) {
    return <p className="text-sm p-2 text-gray">{props.desc}</p>
}

function FormInput(props) {
    return (
        <div className="block my-1 font-paragraph">
            <label className="block text-white my-1">{props.label}</label>
            <input type={props.type} name={props.label} required/>
        </div>
    )
}

function FormSection(props) {
    return <h2 className="text-4xl text-white font-heading mb-3">{props.title}</h2>
}

function DistinationTitle(props) {
    return <h1 className="text-4xl font-heading my-1">{props.text}</h1>
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
    CardText,
    Copyright,
    DestinationPrice,
    DestinationDescription,
    FormInput,
    FormSection,
    DistinationTitle,
}