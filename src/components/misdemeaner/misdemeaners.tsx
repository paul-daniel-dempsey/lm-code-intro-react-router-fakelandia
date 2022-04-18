import React from "react";
import { useEffect, useState } from "react";
import generateMisdemeanours from "../../generate_misdemeanours";
import Misdemeaner, { mdProps } from "./misdemeaner";
import MisdemeanerFilter from "./misdemeanerfilter";
 
// Create Context
export const MDsContext = React.createContext<Array<mdProps>>([]);
 
// Create Context setCharacterFavourites =>
//  React.Dispatch (so can use value in Provider call) 
//  React.SetStateAction (so can link setCharacterFavourites call to be change with array of numbers + initialised to null)
export const UpdateMDsContext = React.createContext<null | React.Dispatch<React.SetStateAction<Array<mdProps>>>>(null);

const Misdemeaners : React.FC = () => {
    
    const [MDs, setMDs] = useState<Array<mdProps>>([]);
    const [currMDfilter, setCurrMDfilter] = useState<string>('All');
    const [countMD, setCountMD] = useState<number>(10);
    
    // load number of misdemeaners  
    useEffect(() => {
        getMisdemanours(countMD);
    }, [countMD])
    
    // generate a number of random misdemeaners
    const getMisdemanours = async (mdNum: number) => {
        const mdResponse = await generateMisdemeanours(mdNum);
        setMDs(mdResponse);
    };

    const buildMDs = () => {
 
        // create element array
        let elements : Array<JSX.Element> = [];
      
        // filter misdemeaners to display
        let displayMisdemeaners : Array<mdProps>;
        if (currMDfilter !== 'All') {
            displayMisdemeaners = MDs.filter((item) => (item.misdemeanour === currMDfilter));}
        else {
            displayMisdemeaners = MDs;
        }

        // switch to display only filtered misdemeaners
        displayMisdemeaners.forEach((item, index)  => {
            elements.push(<Misdemeaner key={index} 
                                   citizenId={item.citizenId} 
                                   misdemeanour={item.misdemeanour} 
                                   date={item.date} />);
            }
        )
        return elements;
     }
     
    // display filter and misdemeaner elements based on filter 
    return (<section className='content'>
        <MDsContext.Provider value={MDs}>
        <UpdateMDsContext.Provider value={setMDs}>
            <MisdemeanerFilter selection={currMDfilter} onChangeSelection={setCurrMDfilter} />
            <div className="character-container">
                {buildMDs()}
            </div>
        </UpdateMDsContext.Provider>
        </MDsContext.Provider>
    </section>);
};

export default Misdemeaners;

