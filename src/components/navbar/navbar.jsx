import React from "react";
import "./navbar.css"
import SearchIcon from '@mui/icons-material/Search';
import FacebookIcon from '@mui/icons-material/Facebook';
import Person from '@mui/icons-material/Person';
import Chat from '@mui/icons-material/Chat';
import Notification from '@mui/icons-material/Notifications';


function Navbar() {
    return (
        <div className="topBarContainer">
            <div className="leftTopBar">
                <span className="logo"><FacebookIcon /></span>
            </div>
            <div className="centerTopBar">
                <div className="searchBar">
                    <SearchIcon className="searchIcon" />
                    <input type="text" className="searchInput"  placeholder="Search for any thing"/>
                </div>
            </div>
            <div className="rightTopBar">
                <div className="topBarLinks">
                    <span className="topBarLink">Home</span>
                    <span className="topBarLink">Timeline</span>
                </div>
                <div className="topBarIcons">
                    <div className="topBarIconItem">
                        <Person/>
                        <span className="topBarIconBag">1</span>
                    </div>
                    <div className="topBarIconItem">
                        <Chat/>
                        <span className="topBarIconBag">2</span>
                    </div>
                    <div className="topBarIconItem">
                        <Notification/>
                        <span className="topBarIconBag">4</span>
                    </div>
                </div>
                <img src="/assets/person/profilepic.jpg" alt="" className="topBarImg"  />
            </div>
        </div>
    )
}


export default Navbar;