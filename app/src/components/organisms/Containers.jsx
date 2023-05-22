function ConditionalRenderer(props){
    return(
        <div className={props.id===props.current?"block":"hidden"}>
            {props.children}
        </div>
    )
}

export {
    ConditionalRenderer,
}