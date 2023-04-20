function Header1(props) {
    return <h1 className='text-white text-9xl font-heading appear'>{props.text}</h1>
}

function Tagline1(props) {
    return <h2 className='text-white text-5xl font-heading appear'>{props.text}</h2>
}

function Subphrase1(props) {
    return <h3 className='text-white text-3xl font-paragraph appear'>{props.text}</h3>
}

function BackgroundImageDescription(props){
    return (
        <p className="absolute top-1/2 -translate-y-1/2 right-12 text-white text-2xl max-w-[24rem] ml-12 appear">{props.description}</p>
    )
}
function Quote(props){
    return <p className="text-xl lg:text-3xl xl:text-5xl text-white mt-4 appear font-paragraph">"{props.text}"</p>
}

function Author(props){
    return <p className="text-md lg:text-xl xl:text-3xl text-pink mt-4 appear font-paragraph">- {props.text}</p>
}

function Title(props){
    return <p className="text-sm lg:text-base xl:text-xl text-white ml-6 my-4 appear font-paragraph">{props.text}</p>
}
function QuoteHeader(props){
    return <h1 className="text-white text-center text-3xl md:text-9xl pt-2 mt-12 max-h-[20%] appear font-heading">{props.text}</h1>
}
function Subphrase2(props){
    return <h2 className="text-base pt-5 px-3 text-white font-paragraph appear">{props.text}</h2>
}
function Header2(props){
    return <h1 className="text-6xl px-3 text-white font-heading appear">{props.text}</h1>
}
function Paragraph(props){
    let text = [];
    props.text.forEach(e=>{text.push(e); text.push(<><br /><br /></>)})
    return <p className="font-paragraph text-sm md:text-base text-white px-3 min-h-48 after:clear-both after:block appear">{text}</p>
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
};