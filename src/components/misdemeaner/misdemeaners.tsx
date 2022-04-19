import React, { useContext, useState } from "react";
import { MDsContext } from "../mainlayout/mainlayout";
import Misdemeaner, { mdProps } from "./misdemeaner";
import MisdemeanerFilter from "./misdemeanerfilter";

const Misdemeaners : React.FC = () => {
   
    // Consume
    const MDs = useContext(MDsContext);

    const [currMDfilter, setCurrMDfilter] = useState<string>('All');

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
        <MisdemeanerFilter selection={currMDfilter} onChangeSelection={setCurrMDfilter} />
        <div className="character-container">
            {buildMDs()}
        </div>
    </section>);
};

export default Misdemeaners;

