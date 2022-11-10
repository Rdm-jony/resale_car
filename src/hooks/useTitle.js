import { useEffect } from "react"

const useTitle=title=>{
    useEffect(()=>{
        document.title=`De_Luxe_Hotel_${title}`
    },[title])
}
export default useTitle;