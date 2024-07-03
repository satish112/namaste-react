import { useEffect, useState } from "react";

const useOnlineStatus = () => {

    const [onlinestatus, setonlinestatus] = useState(true);

    //check if online 

    useEffect(()=>{

        window.addEventListener("online", ()=>{
            setonlinestatus(true);
        });

        window.addEventListener("offline", ()=>{
            setonlinestatus(false);
        });

    }, []);


    //boolean value
    return onlinestatus;
}

export default useOnlineStatus;