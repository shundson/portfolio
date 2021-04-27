import { Tab } from "../organism/tab";
import { Monster } from "../atoms/monster";

export const About = () => {
  return (
    <>
      <Monster IconName="monster1" monid="monfix1" />
      <Monster IconName="monster2" monid="monfix2" />
      <div className="wrapper ">
        <h2 className="worksh2">ABOUT</h2>
        <Tab />
      </div>
    </>
  );
};
