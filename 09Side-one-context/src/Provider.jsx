import { useState } from "react";

import { LevelContext } from "./Context";

const Provider = props =>{
    
    const [mission, setMission] = useState({
        mname: "Go to Russia",
        agent: 67,
        accept: "Not Accepted"
    })

    return(<>
        <LevelContext.Provider
        value={{
            data: mission,
            isMissionAccepted: ()=>{
                setMission({...mission, accept: "ACCEPTED"})
            }
        }}
        >
            {props.children}
        </LevelContext.Provider>
    </>)
}

export default Provider;