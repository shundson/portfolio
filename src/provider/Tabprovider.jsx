import React,{ createContext, useState} from "react";


export const TabContext = createContext(1);

export const TabProvider = (props)=>{
    const {children}=props;
    const [tabInfo,setTab]=useState(1);
    return(
    <TabContext.Provider value={{tabInfo,setTab}}>
        {children}
    </TabContext.Provider>
    );
}