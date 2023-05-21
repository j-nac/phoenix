function ConditionalRenderer(props){
    return(
        <div className={props.id===props.current?"block":"hidden"}>
            <div className="min-h-screen">{props.children}</div>
        </div>
    )
}

export {
    ConditionalRenderer,
}