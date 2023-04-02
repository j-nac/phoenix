function Header1(props) {
    return <h1 className='text-white text-9xl font-heading'>{props.text}</h1>
};

function Subheader1(props) {
    return <h2 className='text-white text-4xl font-heading'>{props.text}</h2>
};

function Header2(props) {
    return <h3 className='text-white text-9xl'>{props.text}</h3>
};

function Subheader2(props) {
    return <h4 className='text-white text-9xl'>{props.text}</h4>
};

export {
    Header1,
    Subheader1,
    Header2,
    Subheader2,
};