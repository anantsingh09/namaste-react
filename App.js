import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "this is a nested component"),
    React.createElement("h2", {}, "this is a heading h2"),
  ])
);

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "This is a heading from React!!"
// );
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
