
export const WorksCard=(props)=>{
  const {content}=props;
  


  return(
       
        <>
        <img src={content.image} alt="作品" width="100%"  />
        <p className="worksname">{content.name}</p>
        </>
    );
}