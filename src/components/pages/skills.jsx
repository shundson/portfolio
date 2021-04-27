import { Monster } from "../atoms/monster";
import SimpleSlider from "../../slider";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Skills = () => {
  return (
    <>
      <Monster IconName="monster3" monid="monfix1" />
      <Monster IconName="monster5" monid="monfix2" />
      <div className="SkillsPage wrapper">
        <h2 className="worksh2">SKILLS</h2>
        <SimpleSlider />
        <div className="skilldesc">
          <p>HTML/CSSをはじめ、jQueryやReactを用いたウェブページの制作</p>
          <p>Adobe PhotoshopやAdobeXDを用いたデザイン</p>
          <p>Ruby on Rails でのアプリ制作</p>
          <p>その他お気軽にご相談ください</p>
        </div>
      </div>
    </>
  );
};
