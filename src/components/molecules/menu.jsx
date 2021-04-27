import { Link } from "react-router-dom";

export const Menu = (props) => {
  const { kansu } = props;

  return (
    <div id="hamburgerbg">
      <nav id="nav" className="navv">
        <ul>
          <li onClick={kansu}>
            <Link to="/">TOP</Link>
          </li>
          <li onClick={kansu}>
            <Link to="/works">WORKS</Link>
          </li>
          <li onClick={kansu}>
            <Link to="/skills">SKILS</Link>
          </li>
          <li onClick={kansu}>
            <Link to="/about">ABOUT</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
