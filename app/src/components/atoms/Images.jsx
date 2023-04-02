function FullBackgroundImage(props) {
    return <div className="bg-cover bg-no-repeat min-h-screen min-w-screen" style={{"backgroundImage" : `url(${props.image}`}}></div>
}

export {
    FullBackgroundImage,
}