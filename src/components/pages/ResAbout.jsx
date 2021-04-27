import { ProfileImage } from "../atoms/profileImage";
import { Form } from "../organism/form";

export const ResAbout = () => {
  return (
    <>
      <div className="wrapper resabout">
        <h2 className="worksh2">ABOUT</h2>
        <ProfileImage />
        <p>高専出身のデジタルクリエイターです！</p>
        <p>学生時代は趣味の演劇に熱中し、成績を下から５番目まで下げました。</p>
        <p>
          しかし就活を機に心を入れ替え、最終的にクラス１６位までもどしました！（そんな高くない）
        </p>
        <p>今はクリエイターとして活躍するため、勉強中です！</p>
        <p>
          ウェブ制作を通して、企業や人の想いを世に伝え、「ファン」を作る手助けができるようなクリエイターになるのが夢。
        </p>

        <Form />
      </div>
    </>
  );
};
