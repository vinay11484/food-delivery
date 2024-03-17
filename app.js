import React from "react";
import ReactDOM from "react-dom/client";
const heading = React.createElement(
  "h1",
  { id: "heading", style: { color: "red" } },
  "hello react"
);

const heading1 = React.createElement(
  "h1",
  { id: "heading", style: { color: "black" } },
  React.createElement(
    "h1",
    { id: "heading1", style: { color: "red" } },
    "hello react"
  )
);
const heading2 = React.createElement(
  "h1",
  { id: "heading", style: { color: "black" } },
  [
    React.createElement(
      "h1",
      { id: "heading1", style: { color: "red" } },
      "sibling1"
    ),
    React.createElement(
      "h1",
      { id: "heading1", style: { color: "red" } },
      "sibling 2"
    ),
  ]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading2);
// root.render(heading);
console.log(heading2);
