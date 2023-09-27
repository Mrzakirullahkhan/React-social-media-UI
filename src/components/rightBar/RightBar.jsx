import "./rightbar.css"
import Online from "../Onilne/Online";
import Users from "../../dummyData";
function Rightbar({Profile}){
const ProfileRightBar=()=>{
    return(
       <>
       <h4 className="rightBarTitle">User information</h4>
       <div className="rightBarInfo">
        <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">City:</span>
            <span className="rightBarInfoValue">karachi</span>
        </div>
        <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">From:</span>
            <span className="rightBarInfoValue">pakistan</span>
        </div>
        <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">Relationship:</span>
            <span className="rightBarInfoValue">Single</span>
        </div>
       </div>
       <h4 className="rightBarTitle">User Friends</h4>
       <div className="rightBarUserFollowings">
        <div className="rightBarUserFollowing">
            <img src="/assets/person/profilepic.jpg" alt=""  className="rightBarFollowingImg"/>
            <span className="rightBarFollowingUserName">nabeel chandio</span>
        </div>
        <div className="rightBarUserFollowing">
            <img src="/assets/person/01.jpeg" alt=""  className="rightBarFollowingImg"/>
            <span className="rightBarFollowingUserName">kamran</span>
        </div>
        <div className="rightBarUserFollowing">
            <img src="/assets/person/02.jpeg" alt=""  className="rightBarFollowingImg"/>
            <span className="rightBarFollowingUserName">Mubeen</span>
        </div>
        <div className="rightBarUserFollowing">
            <img src="/assets/person/03.jpg" alt=""  className="rightBarFollowingImg"/>
            <span className="rightBarFollowingUserName">Asif</span>
        </div>
        <div className="rightBarUserFollowing">
            <img src="/assets/person/04.jpg" alt=""  className="rightBarFollowingImg"/>
            <span className="rightBarFollowingUserName">Irshad</span>
        </div>
        <div className="rightBarUserFollowing">
            <img src="/assets/person/05.jpg" alt=""  className="rightBarFollowingImg"/>
            <span className="rightBarFollowingUserName">nabeel chandio</span>
        </div>
        <div className="rightBarUserFollowing">
            <img src="/assets/person/profilepic.jpg" alt=""  className="rightBarFollowingImg"/>
            <span className="rightBarFollowingUserName">nabeel chandio</span>
        </div>

       </div>
       </>
    )
}
const HomeRightBar=()=>{
    return(
        <>
             <div className="brithdayContainer">
            <img src="/assets/person/birthday.png" alt="" className="birthdayImg" />
            <span className="birthdayText"><b>nabeel</b> and <b>2 others  birthday</b> today</span>
          </div>
          <img src="/assets/person/worldcup.jpg" alt="" className="righbarAdd" />
          <h4 className="rightbarTitile">Onilne Freinds</h4>
          <ul className="rightbarFriendList">
            {Users.map(u=>(
                <Online user={u} key={u.id} />
            ))}
            
            
          </ul>
        </>
    )
}    
    return(
        <div className="rightContainer">
       <div className="rightbarWripper">
        {Profile ? <ProfileRightBar/>:<HomeRightBar/>}
       </div>
    </div>
    )
}

export default Rightbar;