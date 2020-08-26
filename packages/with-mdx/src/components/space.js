import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import config from "../../config";

const Space = ({ page, customScrollConfig, children }) => {
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
      gsap.core.globals("ScrollTrigger", ScrollTrigger);
    }
    // TODO: Add scroll animations per the page config
  }, []);

  return (
    <section className={page}>
      <h1>Page title: {config[`${page}`].title}</h1>
      <h2> Page subtitle: {config[`${page}`].subtitle}</h2>
      Children: {children}
    </section>
  );
};

export default Space;
