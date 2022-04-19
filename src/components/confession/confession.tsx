import React, { useEffect } from "react";
import { useState } from "react";
import Detail from "./detail";
import Reason from "./reason";
import Subject from "./subject";

// Create Context
export const displayButtonContext = React.createContext<boolean>(true);

// Create Context setCharacterFavourites =>
//  React.Dispatch (so can use value in Provider call) 
//  React.SetStateAction (so can link setCharacterFavourites call to be change with array of numbers + initialised to null)
export const UpdateDisplayButtonContext  = React.createContext<null | React.Dispatch<React.SetStateAction<boolean>>>(null);

const Confession : React.FC = () => {

    const [displayButton, setDisplayButton] = useState<boolean>(true);
    const [subject, setSubject] = useState<string>(''); 
    const [reason,setReason] = useState<string>('');  
    const [detail, setDetail] = useState<string>('');

    useEffect(() => {
        setDisplayButton(displayButton);
    }, [displayButton])


	function submitConfession() {
        // To Complete...
    }

    return (
        <displayButtonContext.Provider value={displayButton}>
        <UpdateDisplayButtonContext.Provider value={setDisplayButton}>        
        <section className="">
            <p>Its very difficult to catch people comitting misdemeaners so we appreciate it when citizens confess to us directly.</p>
            <p>Howevere, if you're just having a hard day and need to vent, then your welcome to contact us here too. Up to you!</p>
            <Subject subject={subject} onChangeSubject={(e: any) => setSubject(e.target.value)}/>
            <Reason reason={reason} onChangeReason={(e: any) => setReason(e.target.value)}/>
            <Detail detail={detail} onChangeDetail={(e: any) => setDetail(e.target.value)}/>
            <button type="submit" onClick={submitConfession} disabled={displayButton}>Confess</button>
        </section>
        </UpdateDisplayButtonContext.Provider>
        </displayButtonContext.Provider>
    );
}

export default Confession;