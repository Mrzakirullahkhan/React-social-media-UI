import React from "react"
import "./home.css"
import Navbar from "../../components/navbar/navbar";
import LeftBar from "../../components/leftBar/LeftBar";
import Feed from "../../components/feed/Feed";
import RightBar from "../../components/rightBar/RightBar";


function Home() {
    return (
        <>
            <Navbar />
            <div className="homeContainer">
                <LeftBar />
                <Feed />
                <RightBar />
            </div>
        </>

    )
}

export default Home;

