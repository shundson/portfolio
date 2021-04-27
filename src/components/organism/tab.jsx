
import { useContext, useEffect } from "react";
import { TabContext } from "../../provider/Tabprovider";
import { TabButton } from "../molecules/tabbutton";
import { TabContents } from "../molecules/Tabcontents"

export const Tab =()=>{
 const {tabInfo} =useContext(TabContext);



 /* タブボタンのデザイン切り替え */
   useEffect(() => {
    if(tabInfo==1){
      document.getElementById("tabbutton1").classList.add("maintab");
      document.getElementById("tabbutton1").classList.remove("subtab");
     
      document.getElementById("tabbutton2").classList.add("subtab");
      document.getElementById("tabbutton2").classList.remove("maintab");
     
      document.getElementById("tabbutton3").classList.add("subtab");
      document.getElementById("tabbutton3").classList.remove("maintab");
     }else if(tabInfo==2){
      document.getElementById("tabbutton1").classList.add("subtab");
      document.getElementById("tabbutton1").classList.remove("maintab");
     
      document.getElementById("tabbutton2").classList.add("maintab");
      document.getElementById("tabbutton2").classList.remove("subtab");

      document.getElementById("tabbutton3").classList.add("subtab");
      document.getElementById("tabbutton3").classList.remove("maintab");

     }else if(tabInfo==3){
      document.getElementById("tabbutton1").classList.add("subtab");
      document.getElementById("tabbutton1").classList.remove("maintab");

      document.getElementById("tabbutton2").classList.add("subtab");
      document.getElementById("tabbutton2").classList.remove("maintab");

      document.getElementById("tabbutton3").classList.add("maintab");
      document.getElementById("tabbutton3").classList.remove("subtab");

     }
  });


 
  return(
      
      <>
      <TabButton />
      
      <TabContents />
      </>
    );
}