import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./components/App";
import "./index.css"

render(<Router>
    <Hi />
</Router>,
document.getElementById("app")
);