function ConditionalRenderer(props){
    return(
        <div className={props.id===props.current?"block":"hidden"}>
            <div className="min-h-screen bg-black">{props.children}</div>
        </div>
    )
}

export {
    ConditionalRenderer,
}