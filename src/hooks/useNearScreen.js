import { useEffect,useRef, useState } from "react"

export default function useNearScreen ({distance = "0px",externalRef,once=true} = {}){
    const [isNearScreen, setIsNearScreen] = useState(false)

    const elementRef = useRef()

    useEffect(()=>{
        const element = externalRef ? externalRef.current : elementRef.current
        const onNearScreen = (entries,observer)=>{
            const el = entries[0]
            if(el.isIntersecting){
                setIsNearScreen(true)
                once && observer.disconect
            }else{
                !once && setIsNearScreen(false)
            }
        }
        const observer = new IntersectionObserver(onNearScreen,{rootMargin:distance})
       
        if(element)observer.observe(element)
        
    },[])
    return {isNearScreen,elementRef}

}