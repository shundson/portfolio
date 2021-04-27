
export const SlideItem =(props)=>{
    const {style,IconName,name} = props;

    return(
       <div style={style} className="slidewrap">
        <img className="slideicon" src={`${process.env.PUBLIC_URL}/images/${IconName}.png`} />
        <p className="slidename">{name}</p>
       </div>
    );
}