import "./leftbar.css"
import FeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import VideoIcon from '@mui/icons-material/SlowMotionVideo';
import GroupsIcon from '@mui/icons-material/Groups';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import QuestionIcon from '@mui/icons-material/LiveHelp';
import WorkIcon from '@mui/icons-material/Work';
import EventIcon from '@mui/icons-material/Event';
import CourseIcon from '@mui/icons-material/School';
import CloseFriend from "../closeFriend/CloseFriend";
import Users from "../../dummyData";
function Leftbar(){
    return(
        <div className="leftbarContainer">
            <div className="leftBarWrapper">
                <ul className="sideBarList">
                    <li className="sideBarListItem">
                       <FeedIcon className="sidebarIcon"/>
                       <span className="sideBarListItemText">feed</span>
                    </li>
                    <li className="sideBarListItem">
                       <ChatIcon className="sidebarIcon"/>
                       <span className="sideBarListItemText">Chats</span>
                    </li>
                    <li className="sideBarListItem">
                       <VideoIcon className="sidebarIcon"/>
                       <span className="sideBarListItemText">Videos</span>
                    </li>
                    <li className="sideBarListItem">
                       <GroupsIcon className="sidebarIcon"/>
                       <span className="sideBarListItemText">Groups</span>
                    </li>
                    <li className="sideBarListItem">
                       <BookmarkIcon className="sidebarIcon"/>
                       <span className="sideBarListItemText">Bookmarks</span>
                    </li>
                    <li className="sideBarListItem">
                       <QuestionIcon className="sidebarIcon"/>
                       <span className="sideBarListItemText">Questions</span>
                    </li>
                    <li className="sideBarListItem">
                       <WorkIcon className="sidebarIcon"/>
                       <span className="sideBarListItemText">Jobs</span>
                    </li>
                    <li className="sideBarListItem">
                       <EventIcon className="sidebarIcon"/>
                       <span className="sideBarListItemText">Events</span>
                    </li>
                    <li className="sideBarListItem">
                       <CourseIcon className="sidebarIcon"/>
                       <span className="sideBarListItemText">Courses</span>
                    </li>
                    <button className="sidebarButton">show more</button>
                    <hr className="sidebarHR"/>
                    <ul className="sidebarFreindlist">

                {
                    Users.map(u =>(
                        <CloseFriend user={u} key={u.id}/>
                    ))
                }
                        
                    </ul>
                </ul>
            </div>
        </div>
    )
}

export default Leftbar;