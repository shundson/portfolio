import { memo } from "react";

export const ModalWindow = memo((props) => {
  const { setinfo, content } = props;

  return (
    <>
      <div className="modalwindow" id={`window${content.id}`}>
        <div className="back" onClick={setinfo}></div>
        <div className="modalContent">
          <img src={content.image} alt="" />

          <div className="Mtext">
            <p className="Mname">{content.name}</p>
            <p className="Mdesc">{content.desc}</p>
            <p className="Murl">
              URL:<a href={content.url}>{content.url}</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
});
