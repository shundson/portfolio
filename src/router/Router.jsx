import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Header } from "../components/atoms/layout/Header";
import { Top } from "../components/pages/top";
import { Works } from "../components/pages/works";
import { Skills } from "../components/pages/skills";
import { FooterWithIcon } from "../components/atoms/layout/FooterWithIcon";
import { About } from "../components/pages/about";
import { ResAbout } from "../components/pages/ResAbout";

export const Router = () => {
  let sumaho = true;
  if (window.matchMedia("(max-width: 768px)").matches) {
    sumaho = false;
  }

  return (
    // github pages=> https://qiita.com/ry-itto/items/d11ae12dbe9cd32d83f8
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/">
          <Header />
          <Top />
        </Route>

        <Route exact path="/works">
          <Header />
          <Works />
        </Route>

        <Route exact path="/skills">
          <Header />
          <Skills />
          <FooterWithIcon />
        </Route>

        <Route exact path="/about">
          <Header />
          {sumaho && <About />}

          {!sumaho && <ResAbout />}
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
