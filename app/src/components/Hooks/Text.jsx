import { useEffect, useRef } from "react"

function useOnScreen(options = {root:null, rootMargin:"0px", threshold:.25}){
    const containerRef = useRef(null)
    
    const callback = (entries) => {
        const [ entry ] = entries
        if(entry.isIntersecting)
            containerRef.current.classList.add("active")
    }

    useEffect(()=>{
        const observer = new IntersectionObserver(callback, options)
        if(containerRef.current) observer.observe(containerRef.current)

        let refTemp = containerRef.current

        return () =>{
            if(refTemp) observer.unobserve(refTemp)
        }
    }, [containerRef, options])

    return containerRef
}
export {
    useOnScreen,
}