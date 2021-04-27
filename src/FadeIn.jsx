import React from "react";
import { useSpring, animated } from "react-spring";

export const FadeIn = (prop) => {
  const props = useSpring({
    to: { opacity: 1, color: "#ffaaee" },
    from: { opacity: 0, color: "red" },
  });

  const { children } = prop;
  return <animated.div style={props}>{children}</animated.div>;
};

export default FadeIn;
