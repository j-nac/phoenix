function Header1(props) {
    return <h1 className='text-white text-9xl font-heading'>{props.text}</h1>
}

function Tagline1(props) {
    return <h2 className='text-white text-5xl font-heading'>{props.text}</h2>
}

function Subphrase1(props) {
    return <h3 className='text-white text-3xl font-paragraph'>{props.text}</h3>
}

export {
    Header1,
    Tagline1,
    Subphrase1,
};