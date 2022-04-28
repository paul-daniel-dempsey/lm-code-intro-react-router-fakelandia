import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import generateMisdemeanours from "../../generate_misdemeanours";
import Footer from "../footer/footer";
import Header from "../header/header";
import { mdProps } from "../misdemeaner/misdemeaner";
 
// Create Context
export const MDsContext = React.createContext<Array<mdProps>>([]);

// Create Context setCharacterFavourites =>
//  React.Dispatch (so can use value in Provider call) 
//  React.SetStateAction (so can link setCharacterFavourites call to be change with array of numbers + initialised to null)
export const UpdateMDsContext = React.createContext<null | React.Dispatch<React.SetStateAction<Array<mdProps>>>>(null);

const MainLayout : React.FC = () => {
    
    const [MDs, setMDs] = useState<Array<mdProps>>([]);
    const [countMD] = useState<number>(10);

    // load number of misdemeaners  
    useEffect(() => {
        getMisdemanours(countMD);
    }, [countMD])

    // generate a number of random misdemeaners
    const getMisdemanours = async (mdNum: number) => {
        const mdResponse = await generateMisdemeanours(mdNum);
        if (setMDs != null) {
            setMDs(mdResponse);
        }
    };

    return (
        <MDsContext.Provider value={MDs}>
        <UpdateMDsContext.Provider value={setMDs}>
                <article>
                    <Header/>
                    <main className="main">
                        <Outlet/>
                    </main>
                    <Footer/>
                </article>
        </UpdateMDsContext.Provider>
        </MDsContext.Provider>
    )};
    
export default MainLayout;
