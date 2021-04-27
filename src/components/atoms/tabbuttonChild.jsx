import { useContext } from "react";
import { TabContext } from "../../provider/Tabprovider";

export const TabButtonChild = (props) => {
  const { setTab } = useContext(TabContext);
  const { name, tabNo } = props;

  const Tabchange = (num) => {
    setTab(num);
  };

  return (
    <li className="tabbutton" onClick={() => Tabchange(tabNo)}>
      <a id={`tabbutton${tabNo}`}>{name}</a>
    </li>
  );
};
