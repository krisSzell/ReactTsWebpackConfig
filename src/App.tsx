import React from "react";
import ReactDOM from "react-dom";

import Home from "@components/home";

ReactDOM.render(
    <Home compiler="Typescript" framework="React" bundler="Webpack" />,
    document.getElementById("root")
);
