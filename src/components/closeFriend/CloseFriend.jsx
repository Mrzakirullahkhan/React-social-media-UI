import React from "react";
import "./closeFriend.css"

export default function CloseFriend({user}) {
    return (
        <li className="sidebarFreind">
            <img src={user.profilePicture} alt="" className="sidebarFreindImg" />
            <span className="sidebarFreindName">{user.username}</span>
        </li>
    )
}
