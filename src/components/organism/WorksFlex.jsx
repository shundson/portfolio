import { useEffect, useState } from "react";
import { ModalWindow } from "./ModalWindow";
import { WorksCard } from "./WoksCard"

const workscontents= [
    {
        id:0,
        name:"ポートフォリオサイト",
        image:`${process.env.PUBLIC_URL}/images/sakuhin.jpg`,
        desc:"Reactを用いたポートフォリオサイト",
        url:"https://shundson.netlify.app"
    },
    {
        id:1,
        name:"カフェのサイト",
        image:`${process.env.PUBLIC_URL}/images/sakuhin2.jpg`,
        desc:
        "jQueryを用いたカフェの架空サイトを作成しました。フェードインアウト、スライドショーなどを実装しました。※スマホ非対応",
        url:"https://sad-fermi-d92830.netlify.app"
    },
    {
        id:2,
        name:"name3",
        image:`${process.env.PUBLIC_URL}/images/sakuhin.jpg`,
        desc:"texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext",
        url:"https://google.com"
    },
    {
        id:3,
        name:"name4",
        image:`${process.env.PUBLIC_URL}/images/sakuhin.jpg`,
        desc:"texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext",
        url:"https://google.com"
    },
    {
        id:4,
        name:"name5",
        image:`${process.env.PUBLIC_URL}/images/sakuhin.jpg`,
        desc:"texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext",
        url:"https://google.com"
    },
    {
        id:5,
        name:"name6",
        image:`${process.env.PUBLIC_URL}/images/sakuhin.jpg`,
        desc:"texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext",
        url:"https://google.com"
    },
    {
        id:6,
        name:"name7",
        image:`${process.env.PUBLIC_URL}/images/sakuhin.jpg`,
        desc:"texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext",
        url:"https://google.com"
    },
    {
        id:7,
        name:"name8",
        image:`${process.env.PUBLIC_URL}/images/sakuhin.jpg`,
        desc:"texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext",
        url:"https://google.com"
    },
    
];

export const WorksFlex =()=>{
    const [workinfo,setinfo]=useState({admin:false,id:null});
    
    const Modalopen=(id)=>{
        setinfo({admin:!workinfo.admin,id:id});
    }
    
  
    
        
    

    const colors=[
        "#E15B5B",
        "#AB5BE1",
        "#5B6DE1",
        "#5BCFE1",
        "#D8E15B",
        "#5BE16D"
    ];


    return(
        <>
        {workinfo.admin && (
             <ModalWindow setinfo={setinfo} content={workscontents[workinfo.id]}  />    
        )}


       <div className="WorksFlex flex wrapper">
            { 
                workscontents.map((content)=>(
                    <div key={content.id} style={{backgroundColor:`${colors[content.id % 6]}` ,border:`solid 10px ${colors[content.id % 6]}` }} className="workscard" onClick={()=>Modalopen(content.id)}>
                    <WorksCard  content={content} />
                    </div>
                ))
            }
       </div>
       </>
    );
}