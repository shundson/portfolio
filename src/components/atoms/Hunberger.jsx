
export const Hunberger =(props)=>{
   const {kansu}=props;
    return(
        
        <div class="hamburger" onClick={kansu} id="hanhan">
            <span class="inner_line" id="line1"></span>
            <span class="inner_line" id="line2"></span>
            <span class="inner_line" id="line3"></span>
        </div>
    );
}