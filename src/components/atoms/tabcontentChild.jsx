export const TabContentChild = (props) => {
  const { tabid } = props;
  const { children } = props;

  return (
    <div id={tabid} className="tabcontent">
      {children}
    </div>
  );
};
