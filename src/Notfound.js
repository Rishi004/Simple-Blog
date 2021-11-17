import React from "react";
import { Link } from "react-router-dom";

function Notfound() {
    return (
        <div className="not-found">
            <h1>Sorry</h1>
            <h4>That page cannot be found</h4>
            <Link to="/">Back to the homepage...</Link>
        </div>
    );
}

export default Notfound;
