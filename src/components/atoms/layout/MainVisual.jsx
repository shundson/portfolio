import { Monster } from "../monster"


export const MainVisual =()=>{
    return(
       <div className="mainvisual">
           
           <div className="kuroku"></div>
           <Monster IconName="monster1" monid="mon1"/>
           <Monster IconName="monster2" monid="mon2"/>
           <Monster IconName="monster3" monid="mon3"/>
           <Monster IconName="monster4" monid="mon4"/>
           <Monster IconName="monster5" monid="mon5"/>
           <Monster IconName="monster6" monid="mon6"/>
           <h1 class="port">shunD's Portfolio Site</h1>
           
       </div>
    );
}