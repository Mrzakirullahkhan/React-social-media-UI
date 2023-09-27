import React from 'react'
import "./profile.css"
import Navbar from "../../components/navbar/navbar";
import LeftBar from "../../components/leftBar/LeftBar";
import Feed from "../../components/feed/Feed";
import RightBar from "../../components/rightBar/RightBar";

export default function Profile() {
    return (
        <>
            <Navbar />
            <div className="profile">
                <LeftBar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img src="/assets/person/background.jpg" alt="" className='profileCoverImg'/>
                            <img src="/assets/person/profile.jpg" alt=""  className='profileUserImg'/>
                        </div>
                        <div className="profileUserInfo">
                            <h4 className='profileInfoName'>zakir Ullah</h4>
                            <span className='profileInfodesc'>i am facebook user and it is my own account</span>

                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed />
                        <RightBar Profile />
                    </div>

                </div>

            </div>
        </>)
}
