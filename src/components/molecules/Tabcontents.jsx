import { useContext } from "react";
import { TabContext } from "../../provider/Tabprovider";
import { ProfileImage } from "../atoms/profileImage";
import { TabContentChild } from "../atoms/tabcontentChild";
import { Form } from "../organism/form";

export const TabContents = () => {
  const { tabInfo } = useContext(TabContext);

  return (
    <>
      {tabInfo === 1 && (
        <TabContentChild tabid="tab1">
          <div className="flex">
            <ProfileImage />
            <div className="procontent">
              <p>高専出身のデジタルクリエイターです！</p>
              <p>
                学生時代は趣味の演劇に熱中し、成績を下から５番目まで下げました。
              </p>
              <p>
                しかし就活を機に心を入れ替え、最終的にクラス１６位までもどしました！（そんな高くない）
              </p>
              <p>今はクリエイターとして活躍するため、勉強中です！</p>
              <p>
                ウェブ制作を通して、企業や人の想いを世に伝え、「ファン」を作る手助けができるようなクリエイターになるのが夢。
              </p>
            </div>
          </div>
        </TabContentChild>
      )}

      {tabInfo === 2 && (
        <TabContentChild tabid="tab2">
          <p className="comingsoon">Coming Soon!!</p>
        </TabContentChild>
      )}

      {tabInfo === 3 && (
        <TabContentChild tabid="tab3">
          <Form />
        </TabContentChild>
      )}
    </>
  );
};
