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
    return (
    <section className='misdemeaners'>
        <div className="misdemeaner-filter">
            <MisdemeanerFilter selection={currMDfilter} onChangeSelection={setCurrMDfilter} />
        </div>
        <div className="misdemeaners-flex-container">
            <article className="misdemeaner">
            <ul className="misdemeaner-titles">
                <li className="misdemeaner-title-item">CitizenId</li>
                <li className="misdemeaner-title-item">Date</li>
                <li className="misdemeaner-title-item">Misdemeanour</li>
                <li className="misdemeaner-title-item">Punishment</li>
            </ul>
        </article>  
            {buildMDs()}
        </div>
    </section>);
};

export default Misdemeaners;

