import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
    <div className="jumbotron">
        <h1>FirstReact HomePage</h1>
        <p>React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.</p>
        <Link to="about" className="btn btn-primary btn-lg">
        Learn More
        </Link>
        </div>
)

export default HomePage;
