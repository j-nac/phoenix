import { QuoteImg } from "../atoms/Images";

function QuoteImage(props){
    return (
        <div className="h-full w-1/3 relative hidden md:block">
            <QuoteImg image={props.image}/>
        </div>
    )
}

export {
    QuoteImage,
}