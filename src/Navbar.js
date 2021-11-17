import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <navbar className="navbar">
            <h1>Rishi Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link
                    to="/create"
                    style={{
                        color: "white",
                        backgroundColor: "#f1356d",
                        borderRadius: "8px",
                    }}
                >
                    New Blog
                </Link>
            </div>
        </navbar>
    );
}

export default Navbar;
