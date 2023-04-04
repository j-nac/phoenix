function Header1(props) {
    return <h1 className='text-white text-9xl font-heading'>{props.text}</h1>
}

function Tagline1(props) {
    return <h2 className='text-white text-5xl font-heading'>{props.text}</h2>
}

function Subphrase1(props) {
    return <h3 className='text-white text-3xl font-paragraph'>{props.text}</h3>
}

function BackgroundImageDescription(props){
    return (
        <p className="absolute top-1/2 -translate-y-1/2 right-12 text-white text-2xl max-w-[24rem] ml-12">{props.description}</p>
    )
}
function Quote(props){
    return <p className="text-xl lg:text-3xl xl:text-5xl text-white">"{props.text}"</p>
}

function Author(props){
    return <p className="text-md lg:text-xl xl:text-3xl text-pink">- {props.text}</p>
}

function Title(props){
    return <p className="text-sm lg:text-md xl:text-xl text-purple ml-6">{props.text}</p>
}

export {
    Header1,
    Tagline1,
    Subphrase1,
    BackgroundImageDescription,
    Author,
    Title,
    Quote,
};