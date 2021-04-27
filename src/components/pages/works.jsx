import { FadeIn } from "../../FadeIn";
import { Monster } from "../atoms/monster";
import { WorksFlex } from "../organism/WorksFlex";

export const Works = () => {
  return (
    <div className="WorksPage">
      <FadeIn>
        <h2 className="worksh2">WORKS</h2>
      </FadeIn>

      <Monster IconName="monster4" monid="monfix1" />
      <Monster IconName="monster6" monid="monfix2" />
      <WorksFlex />
    </div>
  );
};
