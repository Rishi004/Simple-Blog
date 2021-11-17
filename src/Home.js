import React from "react";
import Bloglist from "./Bloglist";
import useFetch from "./useFetch";

function Home() {
    const {
        error,
        isPending,
        data: blogs,
    } = useFetch("http://localhost:8000/blogs");

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <Bloglist blogs={blogs} />}
        </div>
    );
}

export default Home;
