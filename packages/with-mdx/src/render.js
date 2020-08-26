import React from "react";
import { render } from "react-dom";
import Blueprint from "./blueprint";
import { MDXProvider } from "@mdx-js/react";
import Space from "./components/space";
import config from "../config";

// const components = {
//     h1: props => <h1 style={{color: 'tomato'}} {...props} />,
//     p: props => <p style={{fontSize: '18px', lineHeight: 1.6}} />,
//     Space
// };

const components = () => {
  const customComponents = config.components;
  customComponents.Space = Space;
  return customComponents;
};

render(
  <MDXProvider components={components}>
    <Blueprint />
  </MDXProvider>,
  document.getElementById("root")
);
