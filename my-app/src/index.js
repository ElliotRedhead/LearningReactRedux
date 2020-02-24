import React from "react";
import { render } from "react-dom";

function helloWorld() {
    return <p>Hello World!</p>
}

render(<helloWorld />, document.getElementById("app"));
